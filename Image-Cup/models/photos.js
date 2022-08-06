const mongoose = require('../db/connection')
// const Album = require('./album')
const User = require('./users')

const photoSchema = new mongoose.Schema({
    id: Number,
    name: {
        type: String,
        required: true,
        default: 'My Photo',
    },
    description: String,
    altText: {
        type: String,
        default: 'Photo',
    },
    url: {
        type: String,
        // required: true,
        // default: 'imgur.com'
    },
    // albumId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Album',
    // },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    fileType: String,
    // deleted: true,
    // favorite: Boolean,
    // tags: [{}],
    },
    {
        timestamps: true,
    }
)

module.exports = photoSchema