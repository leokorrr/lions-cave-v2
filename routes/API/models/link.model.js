const mongoose = require('mongoose')
const linkSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    url: String
})

module.exports = mongoose.model('Link', linkSchema)