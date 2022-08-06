const express = require ('express')
const router = express.Router()
const Photo = require('../models/photos')
const Album = require('../models/album')

// INDEX
// GET /photo/
//localhost:8000/:albumId/photos
// get all photos for an album
router.get('/:albumId/photos', async (req, res, next) => {
    try {
      // find the album first
        const album = await Album.findById(
        req.params.albumId
        ).populate('photos.creator')
        // ^ displays actual name of the photo's creator, rather than only ID
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
// GET /
//localhost:8000/:albumId/:photoId
// view a photo within an album
router.get('/:albumId/:photoId', (req, res, next) => {
    Album.findById(req.params.albumId)
        .populate('photos.creator')
        // ^ displays actual name of the photo's creator, rather than only the ID
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
// creating a photo within an album
// localhost:8000/:albumId/upload
router.post('/:albumId/upload', (req, res, next) => {
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
// edit photo information
// localhost:8000/:photoId/edit
// HAVING ISSUES, 
router.patch('/:photoId/edit', (req, res, next) => {
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
// delete a photo
// localhost:8000/:photoId/edit
router.delete('/:photoId/edit', (req, res, next) => {
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

