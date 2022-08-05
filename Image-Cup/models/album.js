const mongoose = require ('mongoose')
const PhotoSchema = require ('./photos')

const AlbumSchema = new mongoose.Schema({
    id: Number,
    albumName:{
        type: String,
        required: true,
        default: 'My Album'
    },
    description: String,
    url: {
        type: String,
        // required: true,
        // needs to be e.g. localhost:8000/albums/:id
    },
    photos: [PhotoSchema],
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        // required: true,
    },
    
    // private: Boolean,
    // tags: []
    },
    {
        timestamps: true,
    }
)

const Album = mongoose.model('Album', AlbumSchema)

module.exports = Album