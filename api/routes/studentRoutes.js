// const mongoose = require('mongoose')
const Students = require('../controllers/studentContoller')

module.exports = app => {
    app.route('/student')
    .get(Students.list_of_students)
    .post(Students.create_a_student),

    app.route('/student/change')
    .put(Students.change_a_students),

    app.route('/student/:id')
    .put(Students.update_a_student)
    .delete(Students.delete_a_student)
}