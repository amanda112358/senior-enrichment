'use strict';

const db = require('../index');
const Student = require('./Student');
const Campus = require('./Campus');

Student.belongsTo(Campus);
Campus.hasMany(Student);
// Campus.hasMany(Student, {
//   onDelete: 'cascade',
//   hooks: true
// });

module.exports = {
	db,
	Student,
	Campus
}
