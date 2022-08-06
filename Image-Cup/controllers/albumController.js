const express = require ('express')
const router = express.Router()
const Album = require('../models/album')

// INDEX all albums
// GET /albums
// view all albums
router.get('/albums', async (req, res, next) => {
    try {
        const albums = await Album.find({})
        res.json(albums)
    } catch(err){
    next(err)
    }
})

// SHOW
// GET /album/:id
// view a specific album
// (some sample album IDs for testing:)
// 62ec63279e30df4a9bf74286 (cat gifs)
// 62eea95e1e41f377e0590e0e (cute animal pics)
router.get('/album/:id', (req, res, next) => {
	const id = req.params.id;
	Album.findById(id).populate('photos')
		.then((album) => res.json(album))
		.catch(next);
});

// CREATE
// POST /album/
// create a new album
router.post('/album/create', (req, res, next) => {
	const albumData = req.body;
	Album.create(albumData)
		.then((album) => res.status(201).json(album))
		.catch(next);
});

// UPDATE
// PATCH /album/:id
// edit an album's info
router.patch('/album/edit/:id', (req, res, next) => {
	const id = req.params.id;
	const albumData = req.body;
	Album.findOneAndUpdate({ _id: id }, albumData, { new: true })
		.then((album) => res.json(album))
		.catch(next);
});

// DESTROY
// DELETE /album/:id
// delete an album
router.delete('/album/edit/:id', (req, res, next) => {
	const id = req.params.id;
	Album.findOneAndDelete({ _id: id })
		.then(() => res.sendStatus(204))
		.catch(next);
});

module.exports = router

