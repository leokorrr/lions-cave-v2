const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Project = require('./models/project.model')
router
    .route('/projects')
    .get((req, res) => {
        Project
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
        const project = new Project({
            _id: new mongoose.Types.ObjectId(),
            name: req.body.name,
            color: req.body.color,
            url: req.body.url,
            type: req.body.type
        })
        project
            .save()
            .then(data => {
                console.log(data)
                res.status(201).json({
                    message: 'POST request to /projects',
                    addedProject: data
                })
            })
            .catch(err => {
                console.log(err)
                res.status(500).json({error: err})
            })
    })
router
    .route('/projects/:projectId')
    .patch((req, res, next) => {
        const id = req.params.projectId
        const updateOperations = {}
        req.body.map(operations => updateOperations[operations.propName] = operations.value)
        Project
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
        const id = req.params.projectId
        Project
            .remove({_id: id})
            .exec()
            .then(data => {res.status(200).json(data)})
            .catch(err => {
                console.log(err)
                res.status(500).json({error: err})
            })
    })

module.exports = router