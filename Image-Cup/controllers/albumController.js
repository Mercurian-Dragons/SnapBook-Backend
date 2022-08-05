const express = require ('express')
const router = express.Router()
const Album = require('../models/album')

// INDEX all albums
// GET /albums
// working 
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
// working
router.get('/:id', (req, res, next) => {
	const id = req.params.id;
	Album.findById(id).populate('photos')
		.then((album) => res.json(album))
		.catch(next);
});

// CREATE
// POST /album/
// working
router.post('/', (req, res, next) => {
	const albumData = req.body;
	Album.create(albumData)
		.then((album) => res.status(201).json(album))
		.catch(next);
});

// UPDATE
// PATCH /albums/:id
// working
router.patch('/:id', (req, res, next) => {
	const id = req.params.id;
	const albumData = req.body;
	Album.findOneAndUpdate({ _id: id }, albumData, { new: true })
		.then((album) => res.json(album))
		.catch(next);
});

// DESTROY
// DELETE /album/:id
// working
router.delete('/:id', (req, res, next) => {
	const id = req.params.id;
	Album.findOneAndDelete({ _id: id })
		.then(() => res.sendStatus(204))
		.catch(next);
});

module.exports = router

