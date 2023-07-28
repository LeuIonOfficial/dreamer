const User = require("../models/users.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { sendMail } = require("../nodemailer.js");
const { validationResult } = require("express-validator");
const About = require("../models/about");

exports.confirmationEmail = async (req, res)=>{
    const token = req.params.token;
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    const doc = new User({
        email: decode.email,
        passwordHash: decode.hash
    });

    const user = await doc.save();

    const about = new About({
        creator: user._id,
        email: user.email,
    });

    await about.save();


    res.redirect(`http://localhost:5173/success`);
}

exports.singUp = async (req, res) => {
    try {
        const error = validationResult(req);
        if (!error.isEmpty()) {
            return res.status(400).json(error.array());
        }

        let email = await User.findOne({ email: req.body.email });
        if (email) {
            return res.status(409).json({ "message": "User already exists" });
        }
        email = req.body.email
        const password = req.body.password;
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        const token = jwt.sign({
                email: email,
                hash: hash
            },
            process.env.JWT_SECRET,
            {
                expiresIn: '30d'
            }
        )

        const message = `Welcome to Dreamerz! To confirm the email address, click here: http://localhost:3000/confirmationEmail/${token}`
        sendMail(email, "Email Confirmation", message);

        const respons = {
            message: "succes",
        };

        res.json(respons);
    } catch (err) {
        console.log(err);
        res.status(500).json({ "message": "Registration problems" });
    }
};

exports.singIn = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(404).json({ "message": "User was not found" });
        }

        const isValidPassword = await bcrypt.compare(req.body.password, user.passwordHash);
        if (!isValidPassword) {
            return res.status(401).json({ "message": "Login problems" });
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
        res.status(500).json({ "message": "Login problems" });
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
            return res.status(404).json({ "message": "User was not found" });
        }
        const respons = {
            message: "succes",
            email: email,
        };
        res.json(respons);

        sendMail(email, "Dreams Recover Password", `Hey Dreamer, To recover your password, click here: link`);
    } catch (err) {
        console.log(err);
        res.status(500).json({ "message": "Problem changing the password" });
    }
};
