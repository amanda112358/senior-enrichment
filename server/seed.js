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
    description: 'A place to reflect.'
  },
  {
    name: 'Terra Campus',
    imageUrl: '/images/terra.png',
    description: 'The students here are very down-to-earth.'
  },
  {
    name: 'Titan Campus',
    imageUrl: '/images/titan.png',
    description: 'The cool kids reside here.'
  }
];

const students = [{
  "firstName": "Cathrine",
  "lastName": "Ricards",
  "email": "cricards0@stumbleupon.com",
  "gpa": 3.4,
  "campusId": 3
}, {
  "firstName": "Kerr",
  "lastName": "Heazel",
  "email": "kheazel1@posterous.com",
  "gpa": 3.9,
  "campusId": 1
}, {
  "firstName": "Marven",
  "lastName": "Ticic",
  "email": "mticic2@sitemeter.com",
  "gpa": 3.1,
  "campusId": 4
}, {
  "firstName": "Briney",
  "lastName": "Arnley",
  "email": "barnley3@g.co",
  "gpa": 3.3,
  "campusId": 4
}, {
  "firstName": "Ashton",
  "lastName": "Eagles",
  "email": "aeagles4@ameblo.jp",
  "gpa": 3.7,
  "campusId": 4
}, {
  "firstName": "Korry",
  "lastName": "Begley",
  "email": "kbegley5@ucoz.ru",
  "gpa": 3.0,
  "campusId": 1
}, {
  "firstName": "Birdie",
  "lastName": "Macon",
  "email": "bmacon6@soup.io",
  "gpa": 3.3,
  "campusId": 4
}, {
  "firstName": "Guthrey",
  "lastName": "Yeulet",
  "email": "gyeulet7@huffingtonpost.com",
  "gpa": 3.6,
  "campusId": 2
}, {
  "firstName": "Bertram",
  "lastName": "Gero",
  "email": "bgero8@redcross.org",
  "gpa": 3.0,
  "campusId": 4
}, {
  "firstName": "Nelia",
  "lastName": "Giblin",
  "email": "ngiblin9@blogs.com",
  "gpa": 3.3,
  "campusId": 2
}, {
  "firstName": "Philip",
  "lastName": "Cansdell",
  "email": "pcansdella@networkadvertising.org",
  "gpa": 3.8,
  "campusId": 1
}, {
  "firstName": "Calli",
  "lastName": "Jirieck",
  "email": "cjirieckb@patch.com",
  "gpa": 3.3,
  "campusId": 1
}, {
  "firstName": "Atalanta",
  "lastName": "Whybrow",
  "email": "awhybrowc@webmd.com",
  "gpa": 3.9,
  "campusId": 1
}, {
  "firstName": "Sam",
  "lastName": "Poppleton",
  "email": "spoppletond@ameblo.jp",
  "gpa": 3.1,
  "campusId": 2
}, {
  "firstName": "Fergus",
  "lastName": "Ambrogioni",
  "email": "fambrogionie@trellian.com",
  "gpa": 3.5,
  "campusId": 2
}, {
  "firstName": "Kirsteni",
  "lastName": "Guerre",
  "email": "kguerref@360.cn",
  "gpa": 3.7,
  "campusId": 4
}, {
  "firstName": "Daphene",
  "lastName": "Whytock",
  "email": "dwhytockg@ibm.com",
  "gpa": 3.8,
  "campusId": 1
}, {
  "firstName": "Barnie",
  "lastName": "Baal",
  "email": "bbaalh@pbs.org",
  "gpa": 3.2,
  "campusId": 4
}, {
  "firstName": "Kevon",
  "lastName": "Krikorian",
  "email": "kkrikoriani@360.cn",
  "gpa": 3.9,
  "campusId": 4
}, {
  "firstName": "Cristie",
  "lastName": "Wraight",
  "email": "cwraightj@studiopress.com",
  "gpa": 3.9,
  "campusId": 3
}, {
  "firstName": "Raine",
  "lastName": "Costa",
  "email": "rcostak@uol.com.br",
  "gpa": 3.1,
  "campusId": 4
}, {
  "firstName": "Phyllida",
  "lastName": "Pitchers",
  "email": "ppitchersl@cnbc.com",
  "gpa": 2.9,
  "campusId": 1
}, {
  "firstName": "Radcliffe",
  "lastName": "Thorby",
  "email": "rthorbym@chicagotribune.com",
  "gpa": 3.1,
  "campusId": 1
}, {
  "firstName": "Cindy",
  "lastName": "Turk",
  "email": "cturkn@prweb.com",
  "gpa": 3.5,
  "campusId": 4
}, {
  "firstName": "Hulda",
  "lastName": "Prene",
  "email": "hpreneo@lycos.com",
  "gpa": 3.5,
  "campusId": 1
}, {
  "firstName": "Briggs",
  "lastName": "Metherell",
  "email": "bmetherellp@bbb.org",
  "gpa": 3.2,
  "campusId": 3
}, {
  "firstName": "Carline",
  "lastName": "Mollatt",
  "email": "cmollattq@nasa.gov",
  "gpa": 3.6,
  "campusId": 1
}, {
  "firstName": "Blanche",
  "lastName": "Edger",
  "email": "bedgerr@usgs.gov",
  "gpa": 3.2,
  "campusId": 4
}, {
  "firstName": "Brigham",
  "lastName": "O'Reagan",
  "email": "boreagans@mashable.com",
  "gpa": 3.3,
  "campusId": 2
}, {
  "firstName": "Flore",
  "lastName": "Abercromby",
  "email": "fabercrombyt@hud.gov",
  "gpa": 3.6,
  "campusId": 4
}, {
  "firstName": "Laney",
  "lastName": "Heddon",
  "email": "lheddonu@thetimes.co.uk",
  "gpa": 3.6,
  "campusId": 4
}, {
  "firstName": "Parke",
  "lastName": "Bungey",
  "email": "pbungeyv@reddit.com",
  "gpa": 3.5,
  "campusId": 4
}, {
  "firstName": "Cull",
  "lastName": "Coltherd",
  "email": "ccoltherdw@weather.com",
  "gpa": 3.1,
  "campusId": 1
}, {
  "firstName": "Garik",
  "lastName": "Blaxill",
  "email": "gblaxillx@newsvine.com",
  "gpa": 3.8,
  "campusId": 3
}, {
  "firstName": "Salomone",
  "lastName": "Mordey",
  "email": "smordeyy@sina.com.cn",
  "gpa": 3.7,
  "campusId": 2
}, {
  "firstName": "Shaylynn",
  "lastName": "Pearsey",
  "email": "spearseyz@tripadvisor.com",
  "gpa": 3.1,
  "campusId": 1
}, {
  "firstName": "Carson",
  "lastName": "Tatham",
  "email": "ctatham10@unblog.fr",
  "gpa": 3.2,
  "campusId": 4
}, {
  "firstName": "Sheena",
  "lastName": "Duthy",
  "email": "sduthy11@newsvine.com",
  "gpa": 3.1,
  "campusId": 4
}, {
  "firstName": "Fernando",
  "lastName": "Yewdell",
  "email": "fyewdell12@edublogs.org",
  "gpa": 3.7,
  "campusId": 1
}, {
  "firstName": "Harrietta",
  "lastName": "Peat",
  "email": "hpeat13@cdc.gov",
  "gpa": 3.3,
  "campusId": 3
}];


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
