const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const registerValidator = require('./validations/auth.js');
const autorizare = require('./utils/checkAuth.js');
const dotenv = require('dotenv');
const Registration = require("./components/registrationComponents.js");
const Donate = require("./components/donateComponents");
const PostComponents = require("./components/postComponents.js");
const About = require("./components/aboutComponents.js");
const path = require("path");
const Post = require("./models/post");
const jwt = require("jsonwebtoken");
const {minioClient,upload} = require("./components/minioComponent");
//config
dotenv.config({ path: './config/config.env' });
const app = express();


//json convert
app.use(express.json(), cors({
    origin: "*"
}));

app.use(express.urlencoded({
    extended: false,
    limit: 10000,
    parameterLimit:2
} ))


//mongo
mongoose.connect("mongodb+srv://victor:LMWjpNi0do0VpBBT@dreamsdb.bxh5w4z.mongodb.net/dreams?retryWrites=true&w=majority")
    .then(() => console.log("DB OK"))
    .catch(() => console.log("DB ERROR"))

//hello world
app.get('/', (req, res) => {
    res.send("Welcome to my server...");
});

app.post('/test',upload.array('image', 5), async(req,res)=>{
    if (!req.files) {
        return res.status(400).send('Nu au fost încărcate poze.');
    }


    const uploadedFiles = req.files.map((file)  =>{
        const uniqueSuffix = Math.round(Math.random() * 1E9);
        const fileName = file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname)

        minioClient.putObject(process.env.BUCKET_NAME, fileName, file.buffer, (err, etag) => {
            if (err) {
                console.error('Error uploading image to Minio:', err);
            }
            console.log('Image uploaded successfully:', etag);
        });
        return fileName
    })
    res.json(uploadedFiles)
})

// Authentication

app.post('/sign-up', registerValidator, Registration.singUp);

app.get('/confirmationEmail/:token',Registration.confirmationEmail)

app.post('/sign-in', registerValidator, Registration.singIn);

app.patch('/recover', Registration.recover);

// About

app.post('/about', autorizare, About.modify);

app.get('/about', About.post);

// POST

app.post('/post', autorizare,upload.any(), async (req, res) => {
    try {
        if (!req.files) {
            return res.status(400).send('Nu au fost încărcate poze.');
        }

        const uploadedFiles = req.files.map((file)  =>{
            const uniqueSuffix = Math.round(Math.random() * 1E9);
            const fileName = file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname)

            minioClient.putObject(process.env.BUCKET_NAME, fileName, file.buffer, (err, etag) => {
                if (err) {
                    console.error('Error uploading image to Minio:', err);
                }
                console.log('Image uploaded successfully:', etag);
            });
            return fileName
        })

        const data =  JSON.parse(req.body.dream);
        const doc = new Post({
            creator: req.userId,
            image: uploadedFiles,
            description: data.description,
            amount: data.amount
        });
        const post = await doc.save();

        const respons = {
            message: "succes",
            post_id: post._id,
            user_id: post.creator
        };
        res.json(respons);
    } catch (err) {
        console.log(err);
        res.status(500).json({"message": "Erorr"});
    }
});

app.get('/post', async (req, res) => {
    const token = req.headers.authorization
    let id;
    if (token) {
        const decode = jwt.verify(token.replace(/Bearer\s?/, ''), process.env.JWT_SECRET);
        id = decode.id;
    } else {
        id = req.body.id
    }
    const post = await Post.findOne({creator: id});
    if (!post) {
        return res.status(404).json({"message": "Nu a fost gasit asa gen de user"});
    }

    const send = new Promise((resolve, reject) => {
        const dowload = []
        const image = post.image
        image.map((name) => {
            minioClient.presignedGetObject(process.env.BUCKET_NAME, name, (err, url) => {
                if (err) {
                    console.error('Eroare la obținerea URL-ului semnat:', err);
                    return;
                }
                console.log('URL semnat pentru accesul la obiect:', url);
                dowload.push(url)
                if(dowload.length === image.length)
                    resolve(dowload);
            });
        })
    })

    send.then(resolve => res.json(resolve))
});

app.get('/post_all', PostComponents.post_all);

app.patch('/post', autorizare, PostComponents.modify);

//Donate

app.post('/post_donated', autorizare, Donate.donate);

app.post('/subscribe', autorizare, Donate.subscribe);

app.listen(process.env.PORT, (error) => {
    if (error) {
        return console.log(error);
    }

    console.log(`Server OK: http://localhost:3000/`);
});
