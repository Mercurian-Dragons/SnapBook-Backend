const mongoose = require('../db/connection')
const albumSchema = require('../models/album')

const UserSchema = new mongoose.Schema({
    id: Number,
    username: {
        type: String,
        required: true,
        // unique: true,
    },
    albums: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Album',
    }],
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

const User = mongoose.model('User', UserSchema)

module.exports = User