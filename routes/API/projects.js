const express = require('express')
const router = express.Router()
router
    .route('/projects')
    .get((req, res) => console.log('projects'))
    .post((req, res) => console.log('projects'))

module.exports = router