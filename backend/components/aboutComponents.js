const User = require("../models/users.js");
const About = require("../models/about.js");
const { validationResult } = require("express-validator");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

exports.modify = async (req, res) => {
    try {
        const id = req.userId;
        const about = await About.findOne({ creator: id });
        if (!about) {
            return res.status(404).json({ "message": "Nu a fost gasit asa gen de user" });
        }

        await About.updateOne({ creator: id },
            {
                firstName:req.body.firstName,
                lastName:req.body.lastName,
                birthDate:req.body.birthDate,
                gender:req.body.gender,
                phoneNumber:req.body.phoneNumber,
                country:req.body.country,
                city:req.body.city,
                description:req.body.description
            });

        res.json({
            message: "succes",
            about_id: about._id,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json("ERROR");
    }
};

exports.post = async (req, res) => {
    try{
        const token = req.headers.authorization
        let id
        if (token) {
            const decode = jwt.verify(token.replace(/Bearer\s?/, ''), process.env.JWT_SECRET);
            id = decode.id;
        }
        else
        {
            id = req.body.id
        }
        const user = await About.findOne({ creator: id });
        if (!user) {
            return res.status(404).json({ "message": "Nu a fost gasit asa gen de user" });
        }
        res.json(user);
    }
    catch (e) {
        res.json(e)
        console.log(e)
    }
};

exports.postAll = async (req, res) => {
    try{
        const users = await About.find();
        if (!users) {
            return res.status(404).json({ "message": "Users doesn't exist" });
        }
        const data = []
        users.map((user)=>{
            data.push({
                creator :  user.creator,
                firstName: user.firstName,
                lastName: user.lastName
            })
        })
        res.json(data);
    }
    catch (e) {
        res.json(e)
        console.log(e)
    }
};
