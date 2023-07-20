const Post = require("../models/post.js");
const User = require("../models/users.js");
const About = require("../models/about.js");
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
const crypto = require('crypto')
const Minio = require('minio');

exports.create = async (req, res) => {
    try {

        if (!req.files || req.files.length === 0) {
            return res.status(400).json({ error: 'No image files provided.' });
        }

        const uploadedFiles = [];

        const generateimageName = ()=> crypto.randomBytes(32).toString('hex')

        const imageName = generateimageName()

        await minioClient.fPutObject(`${process.env.BUCKET_NAME}`,imageName, req.file.path, (err,etag)=>{
                if (err) {
                    console.error('Eroare la încărcarea fișierului:', err);
                } else {
                    console.log('Fișierul a fost încărcat cu succes:', etag);
                }
            }
        )

        const data = req.body;
        const doc = new Post({
            creator: req.userId,
            image: data.image,
            description: data.description,
            amount: data.amount
        });
        const post = await doc.save();

        const respons = {
            message: "succes",
            post_id: post._id,
            // user_id:post.creator
        };
        res.json(respons);
    } catch (err) {
        console.log(err);
        res.status(500).json({ "message": "Erorr" });
    }
};

exports.post = async (req, res) => {
    try {
        const id = req.userId;
        const post = await Post.findOne({ creator: id });
        if (!post) {
            return res.status(404).json({ "message": "Nu a fost gasit asa gen de user" });
        }
        res.json(post);
    } catch (err) {
        console.log(err);
        res.status(500).json({ "message": "Erorr" });
    }
};

exports.post_all = async (req, res) => {
    try {
        const id = req.userId;
        const post = await Post.find();
        if (!post) {
            return res.status(404).json({ "message": "Nu a fost gasit asa gen de user" });
        }
        res.json(post);
    } catch (err) {
        console.log(err);
        res.status(500).json({ "message": "Erorr" });
    }
};

exports.modify = async (req, res) => {
    try {
        const id = req.userId;
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ "message": "Nu a fost gasit asa gen de user" });
        }
        await Post.updateOne({ creator: id }, { text: req.body.text });
        const respons = {
            message: "succes"
        };
        res.json(respons);
    } catch (err) {
        console.log(err);
        res.status(500).json({ "message": "Erorr" });
    }
};

exports.donate = async (req, res) => {
    try {
        const id = req.userId;
        const post = await Post.findOne({ creator: id });
        const donated_new = post.donated + req.body.donated;
        await Post.updateOne({ creator: id }, { donated: donated_new });
        const respons = {
            message: "succes"
        };
        res.json(respons);
    } catch (err) {
        console.log(err);
        res.status(500).json({ "message": "Erorr" });
    }
};
