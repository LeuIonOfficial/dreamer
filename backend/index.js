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

app.post('/sign-up', registerValidator, Registration.singUp);

app.get('/confirmationEmail/:token',Registration.confirmationEmail)

app.post('/sign-in', registerValidator, Registration.singIn);

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


    const send = new Promise( (resolve)=>{
        const dowload = []
        const image = post.image
          image.map((name) => {
             minioClient.getObject(process.env.BUCKET_NAME, name,  (err, dataStream) => {
                 if (err) {
                     console.log(err)
                     res.json("Eroare")
                 }
                 const objData = []
                 dataStream.on('data', (chunk) => {
                     objData.push(chunk);
                 });
                  dataStream.on('end', () => {

                     console.log(`Obiectul ${name} a fost descărcat cu succes.`);
                      const fileBuffer = Buffer.concat(objData);
                      dowload.push(fileBuffer);
                      if(dowload.length === image.length)
                      {
                          console.log("resolve")
                          resolve(dowload)
                      }

                 })
             })

         })



    })

    send.then((result)=> {
        res.setHeader('Content-Type', 'image/png/jpeg');
        result.forEach((_,index)=> res.write(result[index]))
        res.end()
        // sendPart(result[1],'image/png')
        // res.end('--myboundary--\r\n');

        // Convertim array-ul de obiecte în format JSON
        // const jsonData = JSON.stringify(result);
        // // Trimitem răspunsul HTTP cu datele obiectelor
        //
        // res.end(result[0]);
        console.log('Datele obiectelor au fost trimise cu succes.');
    })

        // const images = image.forEach((file)=> {
        //     const bufferArray = [];
        //     minioClient.getObject(process.env.BUCKET_NAME, file, (err, dataStream) => {
        //         dataStream.on('data', (chunk) => {
        //             bufferArray.push(chunk);
        //         });
        //
        //         dataStream.on('end', () => {
        //             const fileBuffer = Buffer.concat(bufferArray);
        //             return fileBuffer
        //         })
        //     })
        // })
        // console.log(images)

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
