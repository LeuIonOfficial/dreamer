import express from 'express'
import jwt from 'jsonwebtoken'
import mongoose from 'mongoose'
import User from './models/users.js'
import Users from "./models/users.js";

const app = express()

app.use(express.json())
mongoose.connect("mongodb://localhost:27017")
    .then(()=>console.log("DB OK"))
    .catch(()=>console.log("DB ERROR"))


app.get('/',(req,res)=>{
    res.send("Coming soon...")
})

app.post('/sign-up', (req, res)=>{

    const user = req.body
    const doc = new User({
        email: user.email,
        password: user.password
    })
    doc.save()
    res.send("Success")
})

app.listen(3000,(err)=>{
    if(err){
        return console.log(err)
    }

    console.log(`Server OK: http://localhost:3000/`)
})
