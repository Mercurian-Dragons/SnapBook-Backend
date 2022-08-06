const mongoose = require('../db/connection')
const photoSchema = require ('../models/photos')
const User = require('./users')

const albumSchema = new mongoose.Schema({
    id: Number,
    name:{
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
    photos: [photoSchema],
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    
    // private: Boolean,
    // tags: []
    },
    {
        timestamps: true,
    }
)

const Album = mongoose.model('Album', albumSchema)

module.exports = Album