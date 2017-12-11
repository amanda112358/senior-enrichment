'use strict';

const Sequelize = require('sequelize');
const db = require('../index');
const Student = db.model('student');

const images = [
  '/images/europa.png',
  '/images/jupiter.png',
  '/images/neptune.png',
  '/images/saturn.png',
  '/images/uranus.png',
  '/images/venus.png',
];

const getRandomImage = () => images[Math.floor(Math.random() * images.length)];

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
    defaultValue: function () {
      return getRandomImage();
    }
  },
  description: {
    type: Sequelize.TEXT
  }
});

module.exports = Campus;
