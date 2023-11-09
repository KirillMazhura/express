
const mongoose = require('mongoose')
const Student = require('../models/studentModel')

exports.list_of_students = async function(req, res) {
    const students = await Student.find({});
    res.json(students)
}