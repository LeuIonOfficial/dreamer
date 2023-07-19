import User from "../models/users.js";
import About from "../models/about.js";
import {validationResult} from "express-validator";
import mongoose from "mongoose";

export const create = async (req, res)=>{
    try{
        const id = req.userId
        const user = await User.findById(id)
        if(!user){
            return res.status(404).json({"message":"Nu a fost gasit asa gen de user"})
        }
        const doc = new About({
            creator:id,
            email:user.email,
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            birthDate:req.body.birthDate,
            gender:req.body.gender,
            phoneNumber:req.body.phoneNumber,
            country:req.body.country,
            city:req.body.city
        })
        const about = await doc.save()
        res.json({
            message: "succes",
            about_id:about._id,
        })
    }
    catch (err){
        console.log(err)
        res.status(500).json("ERROR")
    }
}
export const post = async (req,res) =>{
    const id = req.userId
    const user = await About.findOne({creator:id})
    if(!user){
        return res.status(404).json({"message":"Nu a fost gasit asa gen de user"})
    }
    res.json(user)
}