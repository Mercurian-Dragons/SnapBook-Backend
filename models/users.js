const mongoose = require ('mongoose')

const UserSchema = new mongoose.Schema({
    id: Number,
    username: {
        type: String,
        required: true,
        // unique: true,
    },
    // password: {
    //     type: String,
    //     required: true,
    //     unique: true,
    // },
    // email: {
    //     type: String,
    //     required: true,
    //     unique: true,
    // },

})

const User = mongoose.model('User', UserSchema)

module.exports = User