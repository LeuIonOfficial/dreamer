const User = require("../models/users.js");
const About = require("../models/about.js");
const { validationResult } = require("express-validator");
const mongoose = require("mongoose");

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
                city:req.body.city
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
    const id = req.userId;
    const user = await About.findOne({ creator: id });
    if (!user) {
        return res.status(404).json({ "message": "Nu a fost gasit asa gen de user" });
    }
    res.json(user);
};
