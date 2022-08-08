const express = require ('express')
const router = express.Router()
const Album = require('../models/album')

const User = require('../models/users')

// (some sample album IDs for testing:)
// 62eea95e1e41f377e0590e0e (cute animal pics)
// 62ed7975d9ebd701018ca344 (memes)
// 62eef7b6c906319085e8c902 (test)

// INDEX - view all albums
// GET
// localhost:8000/albums
router.get('/albums', async (req, res, next) => {
    try {
        const albums = await Album.find({})
		.populate('creator')
		.populate('photos.creator')
		// ^ displays actual name of the photo's creator, rather than only the ID
        res.json(albums)
    } catch(err){
    next(err)
    }
})

// SHOW -  view a specific album
// GET /album/:id
// localhost:8000/album/:id

router.get('/album/:id', (req, res, next) => {
	const id = req.params.id;
	Album.findById(id).populate('photos')
	.populate('creator')
	.populate('photos.creator')
	// ^ displays actual name of the photo's creator, rather than only the ID

		.then((album) => res.json(album))
		.catch(next);
});

// CREATE - new album
// POST /album/
// localhost:8000/album/create
router.post('/album/create', (req, res, next) => {
	const albumData = req.body;
	Album.create(albumData)
	// .populate('creator')

		.then((album) => res.status(201).json(album))
		.catch(next);
});


// UPDATE - an album's info
// PATCH /album/:id
// localhost:8000/album/edit/:id
router.patch('/album/edit/:id', (req, res, next) => {
	const id = req.params.id;
	const albumData = req.body;
	Album.findOneAndUpdate({ _id: id }, albumData, { new: true })
		.populate('creator')
		.then((album) => res.json(album))
		.catch(next);
});


// DESTROY - an album
// DELETE /album/:id
// localhost:8000/album/edit/:id
router.delete('/album/edit/:id', (req, res, next) => {
	const id = req.params.id;
	Album.findOneAndDelete({ _id: id })
	.populate('creator')

		.then(() => res.sendStatus(204))
		.catch(next);
});


module.exports = router