const mongoose = require('../db/connection')
const photoSchema = require ('../models/photos')

const User = require('../models/users')

const albumSchema = new mongoose.Schema({
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
        // needs to be e.g. localhost:8000/album/:id
    },
    creator: {
        type: String,
        // type: mongoose.Schema.Types.ObjectId,
        // ref: 'User',
    },
    photos: [photoSchema],
    // private: Boolean,
    // tags: []
    },
    {
        timestamps: true,
    }
)

const Album = mongoose.model('Album', albumSchema)

module.exports = Album