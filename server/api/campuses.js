'use strict'

const campusRouter = require('express').Router();
const { Campus, Student } = require('../db/models');

module.exports = campusRouter;

// GET /api/campuses/
campusRouter.get('/', (req, res, next) => {
  Campus.findAll({include: [Student]})
  .then(campuses => res.json(campuses))
  .catch(next);
});

// GET /api/campuses/:campusId
campusRouter.get('/:campusId', (req, res, next) => {
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
campusRouter.post('/', function (req, res, next) {
  Campus.create(req.body)
    .then(campus => res.json(campus))
    .catch(next);
});

// PUT /api/campuses
campusRouter.put('/:campusId', function (req, res, next) {
  const id = req.params.campusId;

  Campus.update(req.body, { where: { id } })
    .then(() => res.status(204).end())
    .catch(next);
});

// DELETE /api/students
campusRouter.delete('/:campusId', function (req, res, next) {
  const id = req.params.campusId;

  Campus.destroy({ where: { id } })
    .then(() => res.status(204).end())
    .catch(next);
});

