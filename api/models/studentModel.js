const mongoose = require('mongoose')
const Schema = mongoose.Schema

const StudentSchema = new Schema({
    "name": {
        type: String,
    },
    "group": {
        type: String,
    },
    "photo": {
        type: String,
    },
    "mark": {
        type: Number,
    },
    "isDonePr": {
        type: Boolean,
    },
})

module.exports = mongoose.model("Students", StudentSchema)