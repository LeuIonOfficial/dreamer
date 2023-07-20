const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    creator:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        require: true
    },
    description:{
        type: String,
        require: true
    },
    image:{
        type: Array,
        default: []
    },
    amount:{
        type: Number,
        require: true
    },
    donated:{
        type: Number,
        default: 0
    }
});

const Post = mongoose.model('Post',PostSchema);
module.exports = Post;
