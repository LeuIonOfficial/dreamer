import express from 'express'
import jwt from 'jsonwebtoken'
import mongo from 'mongodb'

const app = express()

app.get('/',(req,res)=>{
    res.send("Coming soon...")
})

app.listen(3000,(err)=>{
    if(err){
        return console.log(err)
    }

    console.log(`Server OK: http://localhost:3000/`)
})
