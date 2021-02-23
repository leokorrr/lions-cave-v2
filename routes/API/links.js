const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Link = require('./models/link.model')
router
    .route('/links')
    .get((req, res, next) => {
        Link
            .find()
            .exec()
            .then(data => {
                console.log(data)
                res.status(200).json(data)
            })
            .catch(err => {
                console.log(err)
                res.status(500).json({error: err})
            })
    })
    .post((req, res, next) => {
        const link = new Link({
            _id: new mongoose.Types.ObjectId(),
            name: req.body.name,
            url: req.body.url,
            imageTitle: req.body.imageTitle
        })
        link
            .save()
            .then(data => {
                console.log(data)
                res.status(201).json({
                    message: 'POST request to /links',
                    addedLink: data
                })
            })
            .catch(err => {
                console.log(err)
                res.status(500).json({error: err})
            })
    })
router
    .route('/links/:linkId')
    .patch((req, res, next) => {
        const id = req.params.linkId
        const updateOperations = {}
        req.body.map(operations => updateOperations[operations.propName] = operations.value)
        Link
            .update({_id: id}, {$set: updateOperations})
            .exec()
            .then(data => {
                console.log(data)
                res.status(200).json(data)
            })
            .catch(err => {
                console.log(err)
                res.status(500).json({error: err})
            })
    })
    .delete((req, res, next) => {
        const id = req.params.linkId
        Link
            .remove({_id: id})
            .exec()
            .then(data => {res.status(200).json(data)})
            .catch(err => {
                console.log(err)
                res.status(500).json({error: err})
            })
    })

module.exports = router