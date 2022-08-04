const express = require ('express')
const router = express.Router()
const Photo = require('../models/Photos')

router.get('/', async (req,res, next) => {
    try{
        const photo = await Photo.find({})
        res.json(photo)
    } catch(err){
        next(err)
    }
})

router.get('/:id', async (req, res, next) => {
    try{
        const photo = await Photo.findById(req.params.id)
        res.json(photo)
    } catch(err){
        next(err)
    }
})

router.post('/', async (req,res,next) => {
    try {
        const newPhoto = await Photo.create(req.body)
        res.status(201).json(newPhoto)
    } catch(err){
        next(err)
    }
})

router.put('/:id', async (req,res,next) => {
    try{
        const updatedPhoto = await Photo.findByIdAndUpdate(req.params.id, req.body, {new:true})
        if(updatedPhoto){
            res.json(updatedPhoto)
        } else{
            res.sendStatus(404)
        }
    } catch(err){
        next(err)
    }
})

router.delete('/:id', async(req,res,next) => {
    try{
        const deletedPhoto = await Photo.findByIdAndDelete(req.params.id)
        res.json(deletedPhoto)
    } catch(err){
        next(err)
    }
})

module.exports = router

