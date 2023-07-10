import Post from "../models/post.js";

export const create = async(req, res)=>{
    try{
        const data = req.body
        const doc = new Post({
            creator: req.userId,
            title:data.title,
            text:data.text,
            images:data.images,
            amount:data.amount,
            donated:0
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
    }
}