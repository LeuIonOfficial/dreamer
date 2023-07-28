const Post = require("../models/post.js");
const User = require("../models/users.js");



exports.post_all = async (req, res) => {
    try {
        const post = await Post.find();
        if (!post) {
            return res.status(404).json({ "message": "Nu a fost gasit asa gen de user" });
        }
        res.json(post);
    } catch (err) {
        console.log(err);
        res.status(500).json({ "message": "Erorr" });
    }
};

exports.modify = async (req, res) => {
    try {
        const id = req.userId;
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ "message": "Nu a fost gasit asa gen de user" });
        }
        await Post.updateOne({ creator: id }, { text: req.body.text });
        const respons = {
            message: "succes"
        };
        res.json(respons);
    } catch (err) {
        console.log(err);
        res.status(500).json({ "message": "Erorr" });
    }
};


