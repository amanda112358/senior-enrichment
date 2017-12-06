'use strict'

const apiRouter = require('express').Router();

module.exports = apiRouter;

apiRouter.use('/campuses', require('./campuses'));
apiRouter.use('/students', require('./students'));
