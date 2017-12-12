'use strict';

const db = require('../index');
const Student = require('./Student');
const Campus = require('./Campus');

Student.belongsTo(Campus, {
	onDelete: 'cascade',
  hooks: true
});
Campus.hasMany(Student);

module.exports = {
	db,
	Student,
	Campus
}
