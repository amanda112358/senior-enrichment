'use strict';

const Sequelize = require('sequelize');
const db = require('../index');
const Student = db.model('student');

const Campus = db.define('campus', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: '/public/favicon.ico'
  },
  description: {
    type: Sequelize.TEXT
  }
});

module.exports = Campus;
