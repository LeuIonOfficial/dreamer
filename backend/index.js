import express from 'express'
import jwt from 'jsonwebtoken'
import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import registerValidator from './validations/auth.js'
import User from './models/users.js'
import {validationResult} from "express-validator";
import cors from 'cors'
import {sendMail} from './nodemailer.js'

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

app.post('/recover',async (req,res)=>{
    try{
        const email = req.body.email
        const user = await User.findOne({email:email})
        if(!user){
            return res.status(404).json({"message":"Nu a fost gasit asa gen de user"})
        }
        const password = "superTopParola3000"
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt)
        await User.updateOne({ email:email}, {passwordHash:hash});
        const respons = {
            message: "succes",
            email:email,
        }
        res.json(respons)

        sendMail(email,"Modificare Parola Dreams",`Salut aceasta este noua ta parola:${password}`)
    }
    catch (err){
        console.log(err)
        res.status(500).json({"message":"Probleme la Modificare Parola"})
    }
})

app.post('/sign-up',registerValidator,async (req, res)=>{
    try{
        const error =validationResult(req)
        if(!error.isEmpty())
        {
            return res.status(400).json(error.array())
        }

        const password = req.body.password
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt)

        const doc = new User({
            email: req.body.email,
            passwordHash: hash
        })
        const user = await doc.save()

        const token = jwt.sign({
                _id: user._id
            },
            "strong_key",
            {
                expiresIn: '30d'
            }
        )

        const respons = {
            message: "succes",
            email:user.email,
            token
        }

        res.json(respons)
    }
    catch (err){
        console.log(err)
        res.status(500).json({"message":"Probleme la Registrare"})
    }


})

app.post('/sign-in',async(req,res)=>{
    try{
        const user = await User.findOne({email:req.body.email})
        if(!user){
            return res.status(404).json({"message":"Nu a fost gasit asa gen de user"})
        }

        const isValidPassword = await bcrypt.compare(req.body.password, user.passwordHash)
        if(!isValidPassword)
        {
            return res.status(401).json({"message":"Probleme la logare"})
        }
        else
        {
            const token = jwt.sign({
                    _id: user._id
                },
                "strong_key",
                {
                    expiresIn: '30d'
                }
            )
            const respons = {
                message: "succes",
                email:user.email,
                token
            }

            res.json(respons)
        }

    }
    catch (err){
        console.log(err)
        res.status(500).json({"message":"Probleme la logare"})
    }
})

app.listen(3000,(error)=>{
    if(error){
        return console.log(error)
    }

    console.log(`Server OK: http://localhost:3000/`)
})