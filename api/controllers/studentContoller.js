const mongoose = require('mongoose')
const Student = require('../models/studentModel')


/**
 * @swagger
 * /student:
 *  get:
 *      summary: returns list_of_students
 *      tags: [student]
 *      responses:
 *              200:
 *                  description: success
 *                  schema:
 *                    type: array
 *                    items: 
 *                      properties: 
 *                        name:
 *                          type: string
 *                          example: Kyrylo
 *                        group:
 *                          type: string
 *                          example: RPZ 20 2/9
 *                        mark:
 *                          type: number
 *                          example: 5
 */
exports.list_of_students = async function(req, res) {
    const students = await Student.find({});
    res.json(students)
    console.log("test")
}
/**
 * @swagger
 * /student:
 *   post:
 *     summary: "Add a student"
 *     tags: [student]
 *     parameters:
 *     - name: "name"
 *       in: "formData"
 *       description: "name of student"
 *       required: true
 *       type: "string"
 *     - name: "group"
 *       in: "formData"
 *       description: "group of student"
 *       required: false
 *       type: "string"
 *     - name: "mark"
 *       in: "formData"
 *       description: "group of student"
 *       required: false
 *       type: "integer"
 *     responses:
 *                200:
 *                  description: "success"
 *                  schema:
 *                    type: "object"
 *                    items: 
 *                    properties: 
 *                        name:
 *                          type: string
 *                          example: Kyrylo
 *                        group:
 *                          type: string
 *                          example: RPZ 20 2/9
 *                        mark:
 *                          type: number
 *                          example: 5
 */
exports.create_a_student = function(req, res, next) {
        Student.create(req.body)
        .then((result) => {
            res.status(200).send(result)
        })
        .catch((err) => {
            next(err)
        })
    }
    /**
 * @swagger
 * /student/{id}:
 *   put:
 *     summary: "Update a student by ID"
 *     tags: 
 *      - "student"
 *     parameters:
 *       - name: "id"
 *         in: "path"
 *         description: "ID of the student to update"
 *         required: true
 *         type: "string"
 *       - name: "name"
 *         in: "formData"
 *         description: "Updated name of the student"
 *         required: false
 *         type: "string"
 *       - name: "group"
 *         in: "formData"
 *         description: "Updated group of the student"
 *         required: false
 *         type: "string"
 *       - name: "mark"
 *         in: "formData"
 *         description: "Updated mark of the student"
 *         required: false
 *         type: "integer"
 *       - name: "photo"
 *         in: "formData"
 *         description: "URL of the student's photo"
 *         required: false
 *         type: "string"
 *       - name: "isDonePr"
 *         in: "formData"
 *         description: "Flag indicating if student's practical work is done"
 *         required: false
 *         type: "boolean"
 *     responses:
 *       200:
 *         description: "Success"
 *         schema:
 *           type: "object"
 *           properties:
 *             message:
 *               type: "string"
 *               example: "Student updated successfully"
 *       400:
 *         description: "Bad Request"
 *       404:
 *         description: "Not Found"
 */
exports.update_a_student = function(req, res) {
    Student.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
    .then((result) => {
        res.status(200).send(result)
    })
    .catch((err) => {
        res.status(400).send(err)
    })
}
exports.delete_a_student = function(req, res) {
    Student.deleteOne({_id: req.params.id})
    .then((result) => {
        res.status(200).send(result)
    })
    .catch((err) => {
        res.status(400).send(err)
    })
}
// exports.change_a_students = function (req, res) {
//     Student.updateMany({photo: "", mark: {$exists: false }}, {$set: {mark: 3}})
//     .then((result) => {
//         res.status(200).send(result)
//     })
//     .catch((err) => {
//         res.status(400).send(err)
//     })
// }
exports.change_a_students = function (req, res) {
    console.log("test")
    Student.updateMany(
        {"photo": {$in: ["", null]}, "mark": {$in: ["", null] }},
        {$set: {"mark": 3}}
      )
      .then((result) => {
        res.status(200).send(result)
      })
      .catch((err) => {
        res.status(400).send(err)
      })
}