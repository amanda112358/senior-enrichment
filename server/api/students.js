'use strict'

const studentRouter = require('express').Router();
const { Student, Campus } = require('../db/models');

module.exports = studentRouter;

// GET /api/students/
studentRouter.get('/', (req, res, next) => {
  Student.findAll()
  .then(students => res.json(students))
  .catch(next);
})

// GET /api/students/:studentId
studentRouter.get('/:studentId', (req, res, next) => {
  Student.findOne({
    where: {
      id: req.params.studentId
    },
    include: [Campus]
  })
  .then(student => res.json(student))
  .catch(next);
})
