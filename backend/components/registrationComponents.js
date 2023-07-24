const User = require("../models/users.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { sendMail } = require("../nodemailer.js");
const { validationResult } = require("express-validator");
const About = require("../models/about");

exports.sing_up = async (req, res) => {
    try {
        const error = validationResult(req);
        if (!error.isEmpty()) {
            return res.status(400).json(error.array());
        }

        const email = await User.findOne({ email: req.body.email });
        if (email) {
            return res.status(400).json({ "message": "Acest Email deja este inregistrat" });
        }

        const password = req.body.password;
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        const doc = new User({
            email: req.body.email,
            passwordHash: hash
        });

        const user = await doc.save();

        const about = new About({
            creator: user._id,
            email: user.email,
        });

        await about.save();


        const respons = {
            message: "succes",
            email: user.email
        };

        res.json(respons);
    } catch (err) {
        console.log(err);
        res.status(500).json({ "message": "Probleme la Registrare" });
    }
};

exports.sing_in = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(404).json({ "message": "Nu a fost gasit asa gen de user" });
        }

        const isValidPassword = await bcrypt.compare(req.body.password, user.passwordHash);
        if (!isValidPassword) {
            return res.status(401).json({ "message": "Probleme la logare" });
        } else {
            const token = jwt.sign({
                    id: user._id,
                    subscribe: user.subscribe
                },
                process.env.JWT_SECRET,
                {
                    expiresIn: '30d'
                }
            )
            const respons = {
                message: "succes",
                user_id: user._id,
                token
            }

            res.json(respons);
        }

    } catch (err) {
        console.log(err);
        res.status(500).json({ "message": "Probleme la logare" });
    }
};

exports.recover = async (req, res) => {
    try {
        const error = validationResult(req);
        if (!error.isEmpty()) {
            return res.status(400).json(error.array());
        }
        const email = req.body.email;
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(404).json({ "message": "Nu a fost gasit asa gen de user" });
        }
        const respons = {
            message: "succes",
            email: email,
        };
        res.json(respons);

        sendMail(email, "Modificare Parola Dreams", `Salut aceseaza acest link ca sa-ti modifici parola`);
    } catch (err) {
        console.log(err);
        res.status(500).json({ "message": "Probleme la Modificare Parola" });
    }
};
