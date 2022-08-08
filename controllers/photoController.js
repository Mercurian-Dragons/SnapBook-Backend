const express = require ('express')
const router = express.Router()
const Photo = require('../models/photos')
const Album = require('../models/album')

// INDEX
// GET /photo/
// get all photos for an album
router.get('/:albumId', async (req, res, next) => {
    try {
      // find the album first
        const album = await Album.findById(
        req.params.albumId
        ).populate('photos')
        if (album) {
        // respond with all of the photos for that album
        res.json(album.photos)
        } else {
        // if you can't find it, send a 404
        res.sendStatus(404)
    }
    } catch (err) {
        next(err)
    }
})

// SHOW
// get one photo
// GET /photo/:albumId/photoId
router.get('/:albumId/:photoId', (req, res, next) => {
    Album.findById(req.params.albumId)
        .populate('photos')
        .then((album) => {
        if (album) {
            const foundPhoto = album.photos.find(photo => photo._id.toString() === req.params.photoId)

        if (foundPhoto) {
            res.json(foundPhoto)
        } else {
            res.sendStatus(404)
        }
        } else {
          // if you can't find it, send a 404
        res.sendStatus(404)
        }
    })
    .catch(next)
})

// CREATE
// POST /photo/
// localhost:8000/photo/albumID
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

// UPDATE
// PATCH /photo
// localhost:8000/photo/photoId
router.patch('/:id', (req, res, next) => {
    const id = req.params.id
    const photoData = req.body

    Album.findOne({
        'photos._id': id,
    })
        .then((album) => {
            const review = album.photos.id(id)
            review.set(photoData)
            return album.save()
        })
        .then(() => res.sendStatus(204))
        .catch(next)
  })

// DESTROY
// DELETE: /photo
// localhost:8000/photo/albumID/photoId
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

