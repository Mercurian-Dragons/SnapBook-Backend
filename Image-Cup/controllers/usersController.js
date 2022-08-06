const express = require ('express')
const router = express.Router()
const User = require('../models/users')

// INDEX all users
// GET /users
// localhost:8000/users
// (may not need this but, but making anyways)
router.get('/users', async (req, res, next) => {
    try {
        const users = await User.find({})
        res.json(users)
    } catch(err){
    next(err)
    }
})

// SHOW
// GET /user/:id
// localhost:8000/user/:id
// see a specific user's info 
// (may not need this, but making anyways)
router.get('user/:id', (req, res, next) => {
	const id = req.params.id;
	User.findById(id)
		.then((user) => res.json(user))
		.catch(next);
});

// CREATE
// POST /user/
// localhost:8000/user/new
// create a new user 
router.post('user/new', (req, res, next) => {
	const userData = req.body;
	User.create(userData)
		.then((user) => res.status(201).json(user))
		.catch(next);
});

// UPDATE
// PATCH /user/:id
// edit user info
router.patch('user/edit/:id', (req, res, next) => {
	const id = req.params.id;
	const userData = req.body;
	User.findOneAndUpdate({ _id: id }, userData, { new: true })
		.then((user) => res.json(user))
		.catch(next);
});

module.exports = router