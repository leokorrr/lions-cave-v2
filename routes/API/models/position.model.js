const mongoose = require('mongoose')
const positionSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    stack: Array,
    responsibilities: Array,
    imageTitle: String,
    fromDate: Date,
    toDate: Date
})
module.exports = mongoose.model('Position', positionSchema)