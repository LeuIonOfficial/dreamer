const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
        email: {
            type: String,
            require: true,
            unique: true
        },
        passwordHash: {
            type: String,
            require: true
        },
        fulfill: {
            type: Number,
            default: 0
        },
        fulfilled: {
            type: Number,
            default: 0
        },
        received: {
            type: Number,
            default: 0
        }

    },
    {
        timestamps: true,
    });

const User = mongoose.model('User', UserSchema);
module.exports = User;
