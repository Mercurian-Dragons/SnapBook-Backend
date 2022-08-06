const mongoose = require('../db/connection')
// const Album = require('./album')
const User = require('./users')

const photoSchema = new mongoose.Schema({
    id: Number,
    filename: {
        type: String,
        required: true,
        default: 'My Photo',
    },
    caption: String,
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
    uploader: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    // deleted: true,
    fileType: String,
    // favorite: Boolean,
    // tags: [{}],
    },
    {
        timestamps: true,
    }
)

module.exports = photoSchema