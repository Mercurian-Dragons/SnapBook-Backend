const express = require('express')
require('dotenv').config
require('./db/connection')
const app = express()
const cors = require('cors')
app.set('port', process.env.PORT || 8000)
const mongoose = require('mongoose')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.get('/', (req,res) => {
    res.redirect('/')
})

const albumController = require('./controllers/albumController')
const Album = require('./models/album')

app.use('/', albumController)

const photoController = require('./controllers/photoController')
const Photo = require('./models/photos')
app.use('/', photoController)

const usersController = require('./controllers/usersController')
const User = require('./models/users')
app.use('/users', usersController)


app.listen(app.get('port'), () => {
    console.log('on port: ' + app.get('port'))
})