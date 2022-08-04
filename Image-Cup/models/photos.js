const mongoose = require ('mongoose')

const PhotoSchema = new mongoose.Schema({
    id: Number,
    filename: String,
    caption: String,
    altText: String,
    uploader: Object,
    fileType: String,
    url: String,
    timestamp: Date,

})

const Photo = mongoose.model('Photo', PhotoSchema)

module.exports = Photo