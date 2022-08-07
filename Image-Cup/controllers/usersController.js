const express = require ('express')
const router = express.Router()
const User = require('../models/users')

	
// INDEX - all users
// GET /users
// localhost:8000/users
router.get('/', async (req, res, next) => {
    try {
        const users = await User.find({})
        res.json(users)
    } catch(err){
    next(err)
    }
})

// SHOW - a specific user
// GET /users//:id
// FOR SOME REASON ONLY WORKS WITH TWO // ??
// localhost:8000/users//:id
router.get('/:id', (req, res, next) => {
	// const id = req.params.id;
	User.findById(req.params.id)
		.then((user) => res.json(user))
		.catch(next);
});

// CREATE -  a new user 
// POST /users/
// localhost:8000/users
router.post('/', (req, res, next) => {
	const userData = req.body;
	User.create(userData)
		.then((user) => res.status(201).json(user))
		.catch(next);
});

// UPDATE
// PATCH /users/:id
// edit user info
router.patch('/edit/:id', (req, res, next) => {
	const userData = req.body;
	User.findOneAndUpdate(req.params.id, userData, { new: true })
		.then((user) => res.json(user))
		.catch(next);
});

// DESTROY - a user
// DELETE /users/:id
// localhost:8000/users/edit/:id
router.delete('/edit/:id', (req, res, next) => {
	const id = req.params.id;
	User.findOneAndDelete({ _id: id })
		.then(() => res.sendStatus(204))
		.catch(next);
});

module.exports = router