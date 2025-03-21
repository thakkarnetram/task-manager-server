const mongoose = require('mongoose');
const shortId = require('shortid')

const UserSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: shortId.generate,
    },
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    }
})

const User = mongoose.model('users', UserSchema);
module.exports = User;
