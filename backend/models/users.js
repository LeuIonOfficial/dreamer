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
        }
    },
    {
        timestamps: true,
    });

const User = mongoose.model('User', UserSchema);
module.exports = User;
