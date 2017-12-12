'use strict'

const router = require('express').Router();
const { Student, Campus } = require('../db/models');

module.exports = router;

// GET /api/students/
router.get('/', (req, res, next) => {
  Student.findAll()
  .then(students => res.json(students))
  .catch(next);
})

// GET /api/students/:studentId
router.get('/:studentId', (req, res, next) => {
  Student.findOne({
    where: {
      id: req.params.studentId
    },
    include: [Campus]
  })
  .then(student => res.json(student))
  .catch(next);
})

// POST /api/students/new-student
router.post('/students/new-student', (req, res, next) => {

    let studentId;

    Student.create(req.body)
    .then(student => {
      studentId = student.id;
      Campus.findById(req.body.campusId)
    })
    .then(campus => {
      Student.update({ campus }, {where: { id: studentId }})
    })
    .then(student => res.json(student))
    .catch(next);
  });

// PUT /api/students/:studentId
router.put('/:studentId', function (req, res, next) {
  const id = req.params.studentId;

  return Student.update(req.body, { where: { id } }) // Model.update does not return instance by default & { returning: true } doesn't seem to work here...
    .then(() => {
      return Student.findById(id)                     // need to find and return campus
      .then(student => res.json(student))
    })
    .catch(next);
});

// DELETE /api/students
router.delete('/:studentId', function (req, res, next) {
  const id = req.params.studentId;

  Student.destroy({ where: { id } })
    .then(() => res.end())
    .catch(next);
});
