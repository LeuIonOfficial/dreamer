import Post from "../models/post.js";
import User from "../models/users.js";
import About from "../models/about.js";

export const create = async(req, res)=>{
    try{
        const data = req.body
        const doc = new Post({
            creator: req.userId,
            title:data.title,
            images:data.images,
            amount:data.amount
        })
        const post = await doc.save()

        const respons = {
            message: "succes",
            post_id:post._id,
            // user_id:post.creator
        }
        res.json(respons)
    }catch (err){
        console.log(err)
        res.status(500).json({"message":"Erorr"})
    }
}

export const post = async (req,res) =>{
    try{
        const id = req.userId
        const post = await Post.findOne({creator:id})
        if(!post){
            return res.status(404).json({"message":"Nu a fost gasit asa gen de user"})
        }
        res.json(post)
    }
    catch (err){
        console.log(err)
        res.status(500).json({"message":"Erorr"})
    }

}

export const post_all = async (req,res) =>{
    try{
        const id = req.userId
        const post = await Post.find()
        if(!post){
            return res.status(404).json({"message":"Nu a fost gasit asa gen de user"})
        }
        res.json(post)
    }
    catch (err){
        console.log(err)
        res.status(500).json({"message":"Erorr"})
    }

}

export const modify = async (req, res) =>{
    try{
        const id = req.userId
        const user = await User.findById(id)
        if(!user){
            return res.status(404).json({"message":"Nu a fost gasit asa gen de user"})
        }
        await Post.updateOne({ creator:id}, {text:req.body.text});
        const respons = {
            message: "succes"
        }
        res.json(respons)

    }
    catch (err) {
        console.log(err)
        res.status(500).json({"message":"Erorr"})
    }
}



export const donate = async (req,res)=>{
    try{
        const id = req.userId
        const post = await Post.findOne({creator:id})
        const donated_new = post.donated + req.body.donated
        await Post.updateOne({ creator:id}, {donated:donated_new});
        const respons = {
            message: "succes"
        }
        res.json(respons)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({"message":"Erorr"})
    }
}
