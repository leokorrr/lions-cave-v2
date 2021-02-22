const express = require('express')
const router = express.Router()

router
    .route('/links')
    .get((req, res) => console.log('links'))
    .post((req, res) => console.log('links'))

module.exports = router