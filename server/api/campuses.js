'use strict'

const campusRouter = require('express').Router();
const { Campus, Student } = require('../db/models');

module.exports = campusRouter;

// GET /api/campuses/
campusRouter.get('/', (req, res, next) => {
  Campus.findAll()
  .then(campuses => res.json(campuses))
  .catch(next);
})

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
})
