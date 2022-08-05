const express = require ('express')
const router = express.Router()
const Photo = require('../models/photos')
const Album = require('../models/album')


router.get('/', async (req,res, next) => {
    try{
        const photo = await Photo.find({})
        res.json(photo)
    } catch(err){
        next(err)
    }
})

// not working, needs testing
// router.get('/:id', async (req, res, next) => {
//     try{
//         const photo = await Photo.findById(req.params.id)
//         res.json(photo)
//     } catch(err){
//         next(err)
//     }
// })

// working (most of the time)
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

// needs to be tested 
// router.put('/:id', async (req,res,next) => {
//     try{
//         const updatedPhoto = await Photo.findByIdAndUpdate(req.params.id, req.body, {new:true})
//         if(updatedPhoto){
//             res.json(updatedPhoto)
//         } else{
//             res.sendStatus(404)
//         }
//     } catch(err){
//         next(err)
//     }
// })

// doesn't seem to be working 
router.delete('/:albumId/:photoId', (req, res, next) => {
    Album.findById(req.params.albumId)
      .then((album) => {
        if (album) {
          album.photos.id(req.params.photoId).remove();
          album.save()
          res.sendStatus(204)
          // } else {
          //   res.sendStatus(404)
          // }
        } else {
          // if you can't find it, send a 404
          res.sendStatus(404)
        }
      })
      .catch(next)
  })

module.exports = router

