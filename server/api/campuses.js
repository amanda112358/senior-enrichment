'use strict'

const router = require('express').Router();
const { Campus, Student } = require('../db/models');
const Promise = require('bluebird');

module.exports = router;

// GET /api/campuses/
router.get('/', (req, res, next) => {
  Campus.findAll({include: [Student]})
  .then(campuses => res.json(campuses))
  .catch(next);
});

// GET /api/campuses/:campusId
router.get('/:campusId', (req, res, next) => {
  Campus.findOne({
    where: {
      id: req.params.campusId
    },
    include: [Student]
  })
  .then(campus => res.json(campus))
  .catch(next);
});

// POST /api/campuses
router.post('/', function (req, res, next) {
  Campus.create(req.body)
    .then(campus => res.json(campus))
    .catch(next);
});

// POST /api/campuses/:campusId/new-student
router.post('/:campusId/new-student', (req, res, next) => {

    return Campus.findById(req.body.campusId)
    .then(campus => {
      const student = Student.build(req.body);
      student.setCampus(campus, { save: false });
      return student.save()
        .then(student => {
          student = student.toJSON(); // here, we make student an object via .toJSON
          student.campus = campus; // so that we can add the campus manually (can't use include here, since campus already exists)
          return student;
        });
    })
    .then(student => {
      res.json(student);
    })
    .catch(next);
  });

// PUT /api/campuses/:campusId
router.put('/:campusId', function (req, res, next) {
  const id = req.params.campusId;

  return Campus.update(req.body, { where: { id } }) // Model.update does not return instance by default & { returning: true } doesn't seem to work here...
    .then(() => {
      return Campus.findById(id)                     // need to find and return campus
      .then(campus => res.json(campus))
    })
    .catch(next);
});

// DELETE /api/campuses/:campusId
router.delete('/:campusId', function (req, res, next) {
  const id = req.params.campusId;

  return Campus.destroy({ where: { id } })
    .then(() => res.end())
    .catch(next);
});

