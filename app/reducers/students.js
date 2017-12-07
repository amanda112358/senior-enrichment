import axios from 'axios';
// import socket from '../socket';


// ACTION TYPES

const GET_STUDENTS = 'GET_STUDENTS';
const GET_STUDENT = 'GET_STUDENT';


// ACTION CREATORS

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


// REDUCER

export default function studentReducer (state = [], action) {

  switch (action.type) {

    case GET_STUDENTS:
      return action.students;

    case GET_STUDENT:
      return [...state.students, action.student];

    default:
      return state;
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

        return axios.post('/api/students', {name: studentName})
          .then(res => res.data)
          .then(newStudent => {
            const action = getStudent(newStudent);
            dispatch(action);
            // socket.emit('new-student', newStudent);
            // history.push(`/students/${newStudent.id}`);
          });
      }
  }

