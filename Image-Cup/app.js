const express = require('express')
require('dotenv').config
require('./db/connection')
const app = express()
app.set('port', process.env.PORT || 3000)
const mongoose = require('mongoose')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.listen(app.get('port'), () => {
    console.log('on port: ' + app.get('port'))
})