const Post = require("../models/post");
const About = require("../models/about");
const User = require("../models/users");

exports.subscribe = async (req,res) =>{
    try{
        const id = req.userId;
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ "message": "Nu a fost gasit asa gen de user" });
        }
        const newFulfill = user.fulfill + req.body.fulfill
        await User.updateOne({ creator: id },{fulfill:newFulfill})
        res.json({
            message: "succes",
            user_id: user._id,
        });
    }catch (e) {
        console.log(e)
        res.json()
    }
}


exports.donate = async (req, res) => {
    try {
        const id = req.userId;
        const post = await Post.findOne({ creator: id });
        const donated_new = post.donated + req.body.donated;
        await Post.updateOne({ creator: id }, { donated: donated_new });
        const respons = {
            message: "succes"
        };
        res.json(respons);
    } catch (err) {
        console.log(err);
        res.status(500).json({ "message": "Erorr" });
    }
};

exports.donate_info = async (req,res) =>{
    try{

    }
    catch (e) {
        console.log(e)
        res.status(500).json({ "message": "Erorr" });
    }
}