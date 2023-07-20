const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AboutSchema = new Schema({
    creator:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        require: true
    },
    firstName:{
        type: String,
    },
    lastName:{
        type: String,
    },
    birthDate:{
        type: String,
    },
    gender:{
        type: String,
    },
    email:{
        type: String,
        require: true,
        unique: true
    },
    phoneNumber:{
        type: String
    },
    country:{
        type: String,
    },
    city:{
        type: String,
    }
});

const About = mongoose.model('About',AboutSchema);
module.exports = About;
