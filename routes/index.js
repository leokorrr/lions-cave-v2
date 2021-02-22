const express = require('express')
const router = express.Router()

router
    .route('/')
    .get((req, res) => res.render('home'))
router
    .route('/projects')
    .get((req, res) => res.render('projects'))
router
    .route('/positions')
    .get((req, res) => res.render('positions'))
router
    .route('/links')
    .get((req, res) => res.render('links'))

module.exports = router