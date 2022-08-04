const mongoose = require ('mongoose')

const AlbumSchema = new mongoose.Schema({
    id: Number,
    filename: String,
    caption: String,
    altText: String,
    uploader: Object,
    fileType: String,
    url: String,
})

const Album = mongoose.model('Album', AlbumSchema)

module.exports = Photo