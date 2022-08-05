const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config
require('./db/connection')
app.set('port', process.env.PORT || 4000)
const mongoose = require('mongoose')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.get('/', (req,res) => {
    res.redirect('/photo')
})

const photoController = require('./controllers/photoController')
const Photo = require('./models/Photos')
app.use('/photo', photoController)

app.listen(app.get('port'), () => {
    console.log('on port: ' + app.get('port'))
})