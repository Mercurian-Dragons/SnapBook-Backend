const express = require ('express')
const router = express.Router()
const User = require('../models/users')

// INDEX - all users
// GET /users
// localhost:8000/users
router.get('/users', async (req, res, next) => {
    try {
        const users = await User.find({})
        res.json(users)
    } catch(err){
    next(err)
    }
})


// SHOW - a specific user
// GET /user/:id
// localhost:8000/user/:id
router.get('user/:id', (req, res, next) => {
	const id = req.params.id;
	User.findById(id)
		.then((user) => res.json(user))
		.catch(next);
});

// CREATE -  a new user 
// POST /user/
// localhost:8000/user/new
router.post('/new', (req, res, next) => {
	const userData = req.body;
	User.create(userData)
		.then((user) => res.status(201).json(user))
		.catch(next);
});

// UPDATE - user info
// PATCH /user/:id
router.patch('user/edit/:id', (req, res, next) => {
	const id = req.params.id;
	const userData = req.body;
	User.findOneAndUpdate({ _id: id }, userData, { new: true })
		.then((user) => res.json(user))
		.catch(next);
});

// DESTROY - a user
// DELETE /user/:id
// localhost:8000/user/edit/:id
router.delete('/user/edit/:id', (req, res, next) => {
	const id = req.params.id;
	User.findOneAndDelete({ _id: id })
		.then(() => res.sendStatus(204))
		.catch(next);
});

module.exports = router