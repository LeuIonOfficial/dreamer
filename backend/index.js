const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Minio = require('minio');
const registerValidator = require('./validations/auth.js');
const autorizare = require('./utils/checkAuth.js');
const dotenv = require('dotenv');
const Registration = require("./components/registrationComponents.js");
const Donate = require("./components/donateComponents");
const PostComponents = require("./components/postComponents.js");
const About = require("./components/aboutComponents.js");
const multer  = require('multer')
const crypto = require('crypto')
const path = require("path");
const Post = require("./models/post");
const jwt = require("jsonwebtoken");

//config
dotenv.config({ path: './config/config.env' });
const app = express();


//json convert
app.use(express.json(), cors({
    origin: "*"
}));


//mongo
mongoose.connect("mongodb+srv://victor:LMWjpNi0do0VpBBT@dreamsdb.bxh5w4z.mongodb.net/dreams?retryWrites=true&w=majority")
    .then(() => console.log("DB OK"))
    .catch(() => console.log("DB ERROR"))


//minio
const minioClient = new Minio.Client({
    endPoint: '127.0.0.1',
    port: 9000,
    useSSL: false,
    accessKey: 'minioadmin',
    secretKey: 'minioadmin',
});

//multer

// let filesName = []
// const storage = multer.diskStorage({
//     destination: (req,file,cb)=>{
//         cb(null,'images')
//     },
//     filename: (req,file,cb) =>{
//         const uniqueSuffix =  Math.round(Math.random() * 1E9);
//         const fileName = file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname)
//         cb(null, fileName);
//         filesName.push(fileName)
//     }
// })

const storage= multer.memoryStorage()

const upload = multer({storage: storage})

// acces to images
// app.use(express.static(path.join(__dirname, 'images')));


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

app.post('/sign-up', registerValidator, Registration.sing_up);

app.post('/sign-in', registerValidator, Registration.sing_in);

app.patch('/recover', Registration.recover);

// About

app.post('/about', autorizare, About.modify);

app.get('/about', About.post);

// POST

app.post('/post', upload.array('image', 5), autorizare, async (req, res) => {
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

            const data = req.body;
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
    }
);

app.get('/post', async (req, res) => {
    try {
        // const token = req.headers.authorization
        // let id
        // if (token) {
        //     const decode = jwt.verify(token.replace(/Bearer\s?/, ''), process.env.JWT_SECRET);
        //     id = decode.id;
        // } else {
        //     id = req.body.id
        // }
        // const id = "64ac0f80546f33d600fb63bd"
        // const post = await Post.findOne({creator: id});
        // if (!post) {
        //     return res.status(404).json({"message": "Nu a fost gasit asa gen de user"});
        // }

        const image = ["image-984123189.png","image-326796961.png"]

        const images = image.map((file) =>{
            const bufferArray = [];
            minioClient.getObject(process.env.BUCKET_NAME, file ,(err, dataStream)=> {
                dataStream.on('data', function(chunk) {
                    bufferArray.push(chunk);
                });

                dataStream.on('end', function() {
                    const fileBuffer = Buffer.concat(bufferArray);
                    console.log(fileBuffer)
                    return fileBuffer;
                });

            });
        })
        res.setHeader('Content-Type', 'image/jpeg');
        res.send(images);

    } catch (err) {
        console.log(err);
        res.status(500).json({"message": "Erorr"});
    }
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
