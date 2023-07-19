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

dotenv.config({ path: './config/config.env' });
const app = express();

app.use(express.json(), cors({
    origin: "*"
}));

mongoose.connect("mongodb+srv://victor:LMWjpNi0do0VpBBT@dreamsdb.bxh5w4z.mongodb.net/dreams?retryWrites=true&w=majority")
    .then(() => console.log("DB OK"))
    .catch(() => console.log("DB ERROR"));

const minioClient = new Minio.Client({
    endPoint: '192.168.1.100',
    port: 9000, // Portul implicit pentru Minio este 9000
    useSSL: true, // Setează pe true dacă utilizezi SSL/TLS
    accessKey: 'minioadmin',
    secretKey: 'minioadmin',
});

minioClient.listBuckets((err, buckets) => {
    if (err) {
        console.log('Eroare la listarea bucket-urilor:', err);
        return;
    }

    console.log('Bucket-uri disponibile:');
    buckets.forEach(bucket => {
        console.log(bucket.name);
    });
});

app.get('/', (req, res) => {
    res.send("Welcome to my server...");
});

// Authentication

app.post('/sign-up', registerValidator, Registration.sinp_up);

app.post('/sign-in', registerValidator, Registration.sing_in);

app.patch('/recover', Registration.recover);

// About

app.post('/about', autorizare, About.create);

app.get('/about', autorizare, About.post);

// POST

app.post('/post', autorizare, Post.create);

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
