// const mongoose = require('mongoose')
const Students = require('../controllers/studentContoller')

module.exports = function(app) {
    app.get('/students', Students.list_of_students)
}