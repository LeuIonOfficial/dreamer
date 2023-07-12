import mongoose from "mongoose";
const Schema = mongoose.Schema

const AboutSchema = new Schema({
    creator:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        require: true
    },
    firstName:{
        type: String,
        require: true
    },
    lastName:{
        type: String,
        require: true
    },
    birthDate:{
        type: String,
        require: true
    },
    gender:{
        type: String,
        require: true
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
        require: true
    },
    city:{
        type: String,
        require: true
    }
})

const About = mongoose.model('About',AboutSchema)
export default About
