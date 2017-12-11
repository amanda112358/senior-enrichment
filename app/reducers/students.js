import axios from 'axios';
// import socket from '../socket';


// ACTION TYPES

const GET_STUDENTS = 'GET_STUDENTS';
const GET_STUDENT = 'GET_STUDENT';
const DELETE_STUDENT = 'DELETE_STUDENT';


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

export const deleteStudent = (studentId) => {
  return {
    type: DELETE_STUDENT,
    studentId
  }
}


// REDUCER

export default function studentReducer (state = [], action) {

  switch (action.type) {

    case GET_STUDENTS:
      return action.students;

    case GET_STUDENT:
      return [...state, action.student];

    case DELETE_STUDENT: {
      const studentToDelete = state.find(student => student.id === action.studentId);
      const indexOfStudentToDelete = state.indexOf(studentToDelete);
      let newState = [...state];
      newState.splice(indexOfStudentToDelete, 1);
      return newState;
    }

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

export function destroyStudent (history, studentId) {

    return function thunk (dispatch) {

      return axios.delete(`/api/students/${studentId}`, {id: studentId})
        .then(() => {
          const action = deleteStudent(studentId);
          dispatch(action);
          const currentPath = history.location.pathname;
          if (currentPath === '/students/') history.push(`/students/`);
          if (currentPath.includes('campuses')) history.push(currentPath);
        });
    }
}

