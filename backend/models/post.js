import mongoose from "mongoose";
const Schema = mongoose.Schema

const PostSchema = new Schema({
    creator:{
        type: String,
        require: true
    },
    title:{
        type: String,
        require: true
    },
    text:{
        type: String,
        require: true
    },
    images:{
        type: String,
    },
    amount:{
        type: Number,
        require: true
    },
    donated:{
        type: Number,
        require: true
    }
})

const Post = mongoose.model('Post',PostSchema)
export default Post
