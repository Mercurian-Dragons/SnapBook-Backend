const mongoose = require('../db/connection')

const Album = require('../models/album')
const userSchema = require('../models/users')

const photoSchema = new mongoose.Schema({
    id: Number,
    name: {
        type: String,
        required: true,
        default: 'My Photo',
    },
    description: String,
    // altText: {
    //     type: String,
    //     default: 'Photo',
    // },
    url: {
        type: String,
        // required: true,
        // default: 'imgur.com'
    },
    album: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Album'
        // required: true
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    // deleted: true,
    // favorite: Boolean,
    // tags: [{}],
    },
    {
        timestamps: true,
    }
)

module.exports = photoSchema