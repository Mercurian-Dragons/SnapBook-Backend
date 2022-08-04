const mongoose = require ('mongoose')

const UserSchema = new mongoose.Schema({
    id: Number,
    username: String,
    password: String,
    email: String,

})

const User = mongoose.model('User', UserSchema)

module.exports = User