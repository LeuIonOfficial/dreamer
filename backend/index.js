import express from 'express'

import mongoose from 'mongoose'

import cors from 'cors'

import Post from "./models/post.js";

import registerValidator from './validations/auth.js'
import autorizare from './utils/checkAuth.js'
import dotenv from 'dotenv'
import * as Registration from "./components/registration.js";

dotenv.config({path: './config/config.env'})
const app = express()

app.use(express.json(),cors({
    origin:"*"
}))
mongoose.connect("mongodb+srv://victor:LMWjpNi0do0VpBBT@dreamsdb.bxh5w4z.mongodb.net/dreams?retryWrites=true&w=majority")
    .then(()=>console.log("DB OK"))
    .catch(()=>console.log("DB ERROR"))


app.get('/',(req,res)=>{
    res.send("Coming soon...")
})

app.get('/me',autorizare,async(req, res)=>{
    try{
        res.json()
    }catch (err){
        console.log(err)
    }
})

app.post('/post', autorizare,async (req, res)=>{

    const doc = new Post({
        creator: req.userEmail,
        title: req.body.title,
        images: req.body.images,
        amount: req.body.amount,
        donated: req.body.donated
    })
    doc.save()
    res.status(200).json("Succes")
})

app.post('/recover',Registration.recover)

app.post('/sign-up',registerValidator,Registration.sinp_up)

app.post('/sign-in',registerValidator,Registration.sing_in)


app.listen(process.env.PORT ,(error)=>{
    if(error){
        return console.log(error)
    }

    console.log(`Server OK: http://localhost:3000/`)
})