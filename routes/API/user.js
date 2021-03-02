const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('./models/user.model')
router
    .route('/add-user')
    .post((req, res, next) => {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
            if (err) return res.status(500).json({error: err})
            const user = new User({
                _id: new mongoose.Types.ObjectId(),
                name: req.body.name,
                email: req.body.email,
                password: hash
            })
            user
                .save()
                .then(data =>  {
                    console.log(data)
                    res.status(201).json({message: 'User created'})
                })
                .catch(err => {
                    console.log(err)
                    res.status(500).json({error: err})
                })
        })
    })
router
    .route('/login')
    .get((req, res, next) => {
        console.log(req.session.user)
        req.session.user ? 
            res.send({loggedIn: true, user: req.session.user})
            :
            res.send({loggedIn: false})
    })
    .post((req, res, next) => {
        User.find({email: req.body.email})
            .exec()
            .then(user => {
                if (user.length < 1) return res.send({message: 'Auth failed'})
                bcrypt.compare(req.body.password, user[0].password, (err, data) => {
                    if (data) {
                        const token = jwt.sign({
                            email: user[0].email,
                            userId: user[0]._id
                        }, process.env.JWT_KEY,{ expiresIn: "1h"})
                        console.log(token)
                        // req.session.user = user 
                        // res.send(user)
                        return res.status(200).json({
                            message: 'Auth successful',
                            token: token
                        })
                    } else {
                        return res.send({message: 'Auth failed'})
                    }
                })
            })
            .catch(err => {
                console.log(err)
                res.status(500).json({error: err})
            })
    })

module.exports = router