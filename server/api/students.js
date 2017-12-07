'use strict'

const studentRouter = require('express').Router();
const { Student, Campus } = require('../db/models');

module.exports = studentRouter;

// GET /api/students/
studentRouter.get('/', (req, res, next) => {
  Student.findAll({include: [Campus]})
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

// POST /api/students
studentRouter.post('/', function (req, res, next) {
  Student.create(req.body)
    .then(student => res.json(student))
    .catch(next);
});

// PUT /api/students
studentRouter.put('/:studentId', function (req, res, next) {
  const id = req.params.studentId;

  Student.update(req.body, { where: { id } })
    .then(() => res.status(204).end())
    .catch(next);
});

// DELETE /api/students
studentRouter.delete('/:studentId', function (req, res, next) {
  const id = req.params.studentId;

  Student.destroy({ where: { id } })
    .then(() => res.status(204).end())
    .catch(next);
});
