const express = require ('express')
const router = express.Router()
const Photo = require('../models/photos')
const Album = require('../models/album')
const User = require('../models/users')

// (some sample album IDs for testing:)
// 62eea95e1e41f377e0590e0e (cute animal pics)
// 62ed7975d9ebd701018ca344 (memes)
// 62eef7b6c906319085e8c902 (test)

// INDEX - get all photos for an album
// GET /photo/
//localhost:8000/:albumId/photos
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
    Album.findById(req.params.id)
        // .populate('photos.creator')
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

// CREATE - a photo within an album
// POST /photo/
// localhost:8000/:albumId/upload
router.post('/:albumId/upload', (req, res, next) => {
    Album.findById(req.params.albumId)
        .then((album) => {
        album.photos.push(req.body)
        return album.save()
    })
    .then((album) => {
        res.status(201).json(album)
    })
    .catch(next)
})

// User.findById(req.params.userId)
// User.albums.push(req.body)

// UPDATE - photo information
// PATCH /photo
// localhost:8000/:photoId/edit
//  -> HAVING ISSUES 
router.patch('/:photoId/edit', (req, res, next) => {
    const id = req.params.id
    const photoData = req.body
    Album.findOneAndUpdate({ 'photos_id': id }, photoData, { new: true })
    .populate('creator')
    .then((photo) => res.json(photo))
    .catch(next);
    // Album.findOne({
    //     'photos._id': id,
    // })
    //     .then((album) => {
    //         const review = album.photos.id(id)
    //         review.set(photoData)
    //         return album.save()
    //     })
    //     .then(() => res.sendStatus(204))
    //     .catch(next)

})

// DESTROY - a photo
// DELETE: /photo
// localhost:8000/:photoId/edit
router.delete('/:photoId/edit', (req, res, next) => {
    Album.findById(req.params.albumId)
    .then((album) => {
        if (album) {
            album.photos.id(req.params.photoId).remove();
            album.save()
            res.sendStatus(204)
        } else {
          // if you can't find it, send a 404
            res.sendStatus(404)
        }
    })
        .catch(next)
})

module.exports = router