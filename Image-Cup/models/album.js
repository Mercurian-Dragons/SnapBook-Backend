const mongoose = require ('mongoose')

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
    },
    photos: [],
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