import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
// import Post from "./models/postComponents.js";
import registerValidator from './validations/auth.js'
import autorizare from './utils/checkAuth.js'
import dotenv from 'dotenv'
import * as Registration from "./components/registrationComponents.js";
import * as Post from "./components/postComponents.js";
import * as About from "./components/aboutComponents.js";

dotenv.config({path: './config/config.env'})
const app = express()

app.use(express.json(),cors({
    origin:"*"
}))
// mongoose.connect("mongodb+srv://victor:LMWjpNi0do0VpBBT@dreamsdb.bxh5w4z.mongodb.net/dreams?retryWrites=true&w=majority")
//     .then(()=>console.log("DB OK"))
//     .catch(()=>console.log("DB ERROR"))

mongoose.connect("mongodb://localhost:27017")
    .then(()=>console.log("DB OK"))
    .catch(()=>console.log("DB ERROR"))

app.get('/',(req,res)=>{
    res.send("Welcome to my server...")
})





app.post('/sign-up',registerValidator,Registration.sinp_up)

app.post('/sign-in',registerValidator,Registration.sing_in)

app.post('/recover',Registration.recover)

app.post('/post_create', autorizare,Post.create)

app.post('/about_create', autorizare,About.create)

app.get('/about', autorizare,About.post)

app.listen(process.env.PORT ,(error)=>{
    if(error){
        return console.log(error)
    }

    console.log(`Server OK: http://localhost:3000/`)
})