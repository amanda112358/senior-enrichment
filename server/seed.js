const { db, Campus, Student } = require('./db/models');

const campuses = [
  {
    name: 'Mars Campus',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/275px-OSIRIS_Mars_true_color.jpg',
    description: 'Really red up here!'
  },
  {
    name: 'Luna Campus',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/275px-OSIRIS_Mars_true_color.jpg',
    description: 'Luna: A place to reflect.'
  },
  {
    name: 'Terra Campus',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/275px-OSIRIS_Mars_true_color.jpg',
    description: 'The student here are very down-to-earth.'
  },
  {
    name: 'Titan Campus',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/275px-OSIRIS_Mars_true_color.jpg',
    description: 'Cool kids reside here.'
  }
];

const students = [
  {
    firstName: 'Amanda',
    lastName: 'Hussey',
    email: 'amanda@email.com',
    gpa: 4.0,
    campusId: 1
  },
  {
    firstName: 'Andrey',
    lastName: 'Stinky',
    email: 'andrey@email.com',
    gpa: 2.0,
    campusId: 2
  },
  {
    firstName: 'Riku',
    lastName: 'Kitten',
    email: 'riku@email.com',
    gpa: 3.0,
    campusId: 3
  },
  {
    firstName: 'Owlie',
    lastName: 'Bear',
    email: 'owlie@email.com',
    gpa: 4.0,
    campusId: 4
  }
];


db.sync({force: true})
  .then(() => {
    return Promise.all(campuses.map(campus => {
      return Campus.create(campus);
    }))
  })
  .then(() => {
    return Promise.all(students.map(student => {
      return Student.create(student);
    }))
  })
  .then(() => {
    console.log('success!!')
  })
  .catch((err) => console.error(err))
