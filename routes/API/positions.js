const express = require('express')
const router = express.Router()

router
    .route('/positions')
    .get((req, res) => console.log('positions'))
    .post((req, res) => console.log('positions'))

module.exports = router