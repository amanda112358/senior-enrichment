const { db, Campus, Student } = require('./db/models');

const campuses = [
  {
    name: 'Mars Campus',
    imageUrl: '/images/mars.png',
    description: 'Really red up here!'
  },
  {
    name: 'Luna Campus',
    imageUrl: '/images/luna.png',
    description: 'Luna: A place to reflect.'
  },
  {
    name: 'Terra Campus',
    imageUrl: '/images/terra.png',
    description: 'The student here are very down-to-earth.'
  },
  {
    name: 'Titan Campus',
    imageUrl: '/images/titan.png',
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
  },
  {
    firstName: 'Mattie',
    lastName: 'Hussey',
    email: 'amanda@email.com',
    gpa: 4.0,
    campusId: 1
  },
  {
    firstName: 'Reginald',
    lastName: 'Flower',
    email: 'andrey@email.com',
    gpa: 2.0,
    campusId: 2
  },
  {
    firstName: 'Sierra',
    lastName: 'Nevada',
    email: 'riku@email.com',
    gpa: 3.0,
    campusId: 3
  },
  {
    firstName: 'Fruit',
    lastName: 'Bat',
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
