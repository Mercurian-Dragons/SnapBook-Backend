const express = require ('express')
const router = express.Router()
// const Photo = require('../models/photos')
const Album = require('../models/album')

router.get('/', async (req,res, next) => {
    try{
        const photo = await Photo.find({})
        res.json(photo)
    } catch(err){
        next(err)
    }
})

router.get('/:id', async (req, res, next) => {
    try{
        const photo = await Photo.findById(req.params.id)
        res.json(photo)
    } catch(err){
        next(err)
    }
})

// posting a photo TO AN ALBUM
router.post('/:albumId', (req, res, next) => {
    Album.findById(req.params.albumId)
        .then((album) => {

        album.photos.push(req.body)

        return album.save()
        // res.status(201).json(restaurant.save())
    })
    .then((album) => {
        res.status(201).json(album)
    })
    .catch(next)
})

// router.post('/:albumId', async (req,res,next) => {
//     try {
//         const photoData = req.body;
//         // get id of album from body of photo upload?
//         // const albumId = req.params.albumId;
//         Album.findById(req.params.albumId)
//             .then((album) => {
//                 // add photo to album
//                 album.photos.push(photoData);
//                 // save album
//                 return album.save();
//             })
//             // send response back to client
//             // .then((album) => res.status(201).json({album: Album}))
//             .then((album) => { res.status(201).json(album)})
//         // const newPhoto = await Photo.create(req.body)
//         // res.status(201).json(newPhoto)
//     } catch(err){
//         next(err)
//     }
// })

router.put('/:id', async (req,res,next) => {
    try{
        const updatedPhoto = await Photo.findByIdAndUpdate(req.params.id, req.body, {new:true})
        if(updatedPhoto){
            res.json(updatedPhoto)
        } else{
            res.sendStatus(404)
        }
    } catch(err){
        next(err)
    }
})

router.delete('/:id', async(req,res,next) => {
    try{
        const deletedPhoto = await Photo.findByIdAndDelete(req.params.id)
        res.json(deletedPhoto)
    } catch(err){
        next(err)
    }
})

module.exports = router

