const express = require ('express')
const router = express.Router()
const User = require('../models/users')

// INDEX all users
// GET /user
// unlikely to need this but, but making anyways
router.get('/', async (req, res, next) => {
    try {
        const users = await User.find({})
        res.json(users)
    } catch(err){
    next(err)
    }
})

// SHOW
// GET /user/:id
// see a specific user's info 
// unlikely to need this unless we get far into stretch goals, but making anyways
router.get('/:id', (req, res, next) => {
	const id = req.params.id;
	User.findById(id)
		.then((user) => res.json(user))
		.catch(next);
});

// CREATE
// POST /user/
// create a new user 
router.post('/', (req, res, next) => {
	const userData = req.body;
	User.create(userData)
		.then((user) => res.status(201).json(user))
		.catch(next);
});

// UPDATE
// PATCH /user/:id
// edit user info
router.patch('/:id', (req, res, next) => {
	const id = req.params.id;
	const userData = req.body;
	User.findOneAndUpdate({ _id: id }, userData, { new: true })
		.then((user) => res.json(user))
		.catch(next);
});

module.exports = router