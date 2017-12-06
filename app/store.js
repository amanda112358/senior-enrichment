import { createStore, applyMiddleware } from 'redux';
import loggingMiddleware from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk

// import rootReducer from './reducers';

// INITIAL STATE

const initialState = {
  campuses: [],
  students: [],
  selectedCampus: {},
  selectedStudent: {},
  newStudentEntry: ''
};

// ACTION TYPES

const GET_CAMPUSES = 'GET_CAMPUSES';
const GET_CAMPUS = 'GET_CAMPUS';
const GET_STUDENTS = 'GET_STUDENTS';
const GET_STUDENT = 'GET_STUDENT';
const CREATE_STUDENT = 'CREATE_STUDENT';


// ACTION CREATORS

export const getCampuses = (campuses) => {
  return {
    type: GET_CAMPUSES,
    campuses
  }
}

export const getCampus = (campus) => {
  return {
    type: GET_CAMPUS,
    campus
  }
}

export const getStudents = (students) => {
  return {
    type: GET_STUDENTS,
    students
  }
}

export const getStudent = (student) => {
  return {
    type: GET_STUDENT,
    student
  }
}

export const createStudent = (studentName) => {
  return {
    type: GET_STUDENT,
    student
  }
}

// THUNK CREATORS

export function fetchStudents () {

  return function thunk (dispatch) {
    return axios.get('/api/students')
      .then(res => res.data)
      .then(students => {
        const action = getStudents(students);
        dispatch(action);
      });
  }
}

export function postStudent (studentName, history) {

  return function thunk (dispatch) {

    return axios.post('/api/students', {name: channelName})
      .then(res => res.data)
      .then(newStudent => {
        const action = getStudent(newStudent);
        dispatch(action);
        // socket.emit('new-student', newStudent);
        // history.push(`/students/${newStudent.id}`);
      });
  }
}


// REDUCER

function reducer (state = initialState, action) {

  switch (action.type) {

    case GET_STUDENTS:
      return {
        ...state,
        messages: action.students
      };

    case GET_STUDENT:
      return {
        ...state,
        messages: [...state.students, action.student]
      };

    case CREATE_STUDENT:
      return {
        ...state,
        newStudentEntry: action.studentName
      };

    default:
      return state;
  }

}

export default createStore(reducer, applyMiddleware(thunkMiddleware, loggingMiddleware));
