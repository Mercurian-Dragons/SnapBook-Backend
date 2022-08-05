const express = require ('express')
const router = express.Router()
// const album = require('../models/albums')
const Album = require('../models/album')

// INDEX all albums
// GET /albums
router.get('/', async (req, res, next) => {
    try {
        const albums = await Album.find({})
        res.json(albums)
    } catch(err){
    next(err)
    }
})

// SHOW
// GET /albums/:id
router.get('/:id', async (req, res, next) => {
    try{
        const id = req.params.id
        res.json(album)
    } catch(err){
        next(err)
    }
})

// router.post('/', async (req,res,next) => {
//     try {
//         // get album data from body of request
//         const albumData = req.body;
//         // get id of album from body of album upload?
//         const albumId = albumData.albumId;
//         // find preexisting album by its id
//         Album.findById(albumId)
//             .then((album) => {
//                 // add album to album
//                 Album.albums.push(albumData);
//                 // save album
//                 return album.save();
//             })
//             // send response back to client
//             .then((album) => res.status(201).json({album: Album}))
//         // const newalbum = await album.create(req.body)
//         // res.status(201).json(newalbum)
//     } catch(err){
//         next(err)
//     }
// })

// router.put('/:id', async (req,res,next) => {
//     try{
//         const updatedAlbum = await album.findByIdAndUpdate(req.params.id, req.body, {new:true})
//         if(updatedalbum){
//             res.json(updatedAlbum)
//         } else{
//             res.sendStatus(404)
//         }
//     } catch(err){
//         next(err)
//     }
// })

// router.delete('/:id', async(req,res,next) => {
//     try{
//         const deletedAlbum = await Album.findByIdAndDelete(req.params.id)
//         res.json(deletedAlbum)
//     } catch(err){
//         next(err)
//     }
// })

module.exports = router

