const mongoose = require('../db/connection');
const photoSeedData = require('./photos.json');
const albumSeedData = require('./albums.json');
const userSeedData = require('./users.json');
const Photo = require('../models/photos');
const Album = require('../models/album')
const User = require('../models/users')


// Photo.deleteMany({})
// 	.then(() => {
// 		Photo.insertMany(photoSeedData).then((photos) => {
// 			console.log('Your photos have been added!');
// 			console.log(photos);
// 			process.exit();
// 		});
// 	})
// 	.catch((err) => console.error(err));

// Album.deleteMany({})
// 	.then(() => {
// 		Album.insertMany(albumSeedData).then((albums) => {
// 			console.log('Your album has been added!');
// 			console.log(albums);
// 			process.exit();
// 		});
// 	})
// 	.catch((err) => console.error(err));

// User.deleteMany({})
// 	.then(() => {
// 		User.insertMany(userSeedData).then((users) => {
// 			console.log('Your album has been added!');
// 			console.log(users);
// 			process.exit();
// 		});
// 	})
// 	.catch((err) => console.error(err));