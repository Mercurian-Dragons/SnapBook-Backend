const mongoose = require ('mongoose')
const Album = require('./album')

const PhotoSchema = new mongoose.Schema({
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
    albumId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Album',
    },
    // uploader: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User',
    //     required: true,
    // },
    // deleted: true,
    fileType: String,
    // favorite: Boolean,
    // tags: [{}],
    },
    {
        timestamps: true,
    }
)

// const Photo = mongoose.model('Photo', PhotoSchema)

module.exports = PhotoSchema;