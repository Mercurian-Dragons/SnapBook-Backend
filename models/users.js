const mongoose = require('mongoose')
const Album = require('../models/album')

const userSchema = new mongoose.Schema({
    id: Number,
    username: {
        type: String,
        required: true,
        // unique: true,
    },
    // can't figure out how to get it connected to display a user's albums...
    // do we need to?
    // albums: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Album'
    // }],
    // password: {
    //     type: String,
    //     required: true,
    //     unique: true,
    // },
    // email: {
    //     type: String,
    //     required: true,
    //     unique: true,
    // },
})

const User = mongoose.model('User', userSchema);

module.exports = User;