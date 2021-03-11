const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Position = require('./models/position.model')
router
    .route('/positions')
    .get((req, res) => {
        Position
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
    .post((req, res) => {
        const position = new Position({
            _id: new mongoose.Types.ObjectId(),
            title: req.body.title,
            stack: req.body.stack,
            responsibilities: req.body.responsibilities,
            imageTitle: req.body.imageTitle,
            color: req.body.color,
            fromDate: req.body.fromDate,
            toDate: req.body.toDate
        })
        position
            .save()
            .then(data => {
                console.log(data)
                res.status(201).json({
                    message: 'POST request to /positions',
                    addedProject: data
                })
            })
            .catch(err => {
                console.log(err)
                res.status(500).json({error: err})
            })
    })
router
    .route('/positions/:positionId')
    .patch((req, res, next) => {
        const id = req.params.positionId
        const updateOperations = {}
        req.body.map(operations => updateOperations[operations.propName] = operations.value)
        Position
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
        const id = req.params.positionId
        Position
            .remove({_id: id})
            .exec()
            .then(data => {res.status(200).json(data)})
            .catch(err => {
                console.log(err)
                res.status(500).json({error: err})
            })
    })

module.exports = router