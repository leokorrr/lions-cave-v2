const mongoose = require('mongoose')
const projectSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    color: String,
    url: String,
    type: String
})

module.exports = mongoose.model('Project', projectSchema)