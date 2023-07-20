const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Minio = require('minio');
const registerValidator = require('./validations/auth.js');
const autorizare = require('./utils/checkAuth.js');
const dotenv = require('dotenv');
const Registration = require("./components/registrationComponents.js");
const Post = require("./components/postComponents.js");
const About = require("./components/aboutComponents.js");
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
const crypto = require('crypto')


dotenv.config({ path: './config/config.env' });
const app = express();

app.use(express.json(), cors({
    origin: "*"
}));

mongoose.connect("mongodb+srv://victor:LMWjpNi0do0VpBBT@dreamsdb.bxh5w4z.mongodb.net/dreams?retryWrites=true&w=majority")
    .then(() => console.log("DB OK"))
    .catch(() => console.log("DB ERROR"));


const minioClient = new Minio.Client({
    endPoint: '127.0.0.1',
    port: 9000,
    useSSL: false,
    accessKey: 'minioadmin',
    secretKey: 'minioadmin',
});

app.get('/', (req, res) => {
    res.send("Welcome to my server...");
});



app.post('/post_image', upload.single("image"),async (req,res)=>{
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
    console.log(req.file);

})

app.get('/get_image',async (req,res)=> {

    await minioClient.getObject(`${process.env.BUCKET_NAME}`, 'image.png', (err, stream) => {
        if (err) {
            console.error('Error fetching the image from MinIO:', err);
            return res.status(500).send('Error fetching the image from MinIO');
        }

        res.setHeader('Content-Type', 'image/jpeg');
        stream.pipe(res);
    });
})

// Authentication

app.post('/sign-up', registerValidator, Registration.sing_up);

app.post('/sign-in', registerValidator, Registration.sing_in);

app.patch('/recover', Registration.recover);

// About

app.post('/about', autorizare, About.modify);

app.get('/about', autorizare, About.post);

// POST

app.post('/post', upload.array('image', 5), autorizare, Post.create);

app.get('/post', autorizare, Post.post);

app.get('/post_all', Post.post_all);

app.patch('/post', autorizare, Post.modify);

app.post('/post_donated', autorizare, Post.donate);

app.listen(process.env.PORT, (error) => {
    if (error) {
        return console.log(error);
    }

    console.log(`Server OK: http://localhost:3000/`);
});
