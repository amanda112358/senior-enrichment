import axios from 'axios';
// import socket from '../socket';


// ACTION TYPES

const GET_STUDENTS = 'GET_STUDENTS';
const GET_STUDENT = 'GET_STUDENT';
const EDIT_STUDENT = 'EDIT_STUDENT';
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

export const editStudent = (student) => {
  return {
    type: EDIT_STUDENT,
    student
  }
}

export const deleteStudent = (student) => {
  return {
    type: DELETE_STUDENT,
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

export function postStudent (history, studentData) {

    return function thunk (dispatch) {

      const { campusId } = studentData;

      return axios.post(`/api/campuses/${campusId}/new-student`, studentData)
        .then(res => res.data)
        .then(newStudent => {
          const action = getStudent(newStudent);
          dispatch(action);
          history.push(`/campuses/${campusId}`);
        });
    }
}

export function putStudent (history, studentData, studentId) {

    return function thunk (dispatch) {

      return axios.put(`/api/students/${studentId}`, studentData)
        .then(res => res.data)
        .then(updatedStudent => {
          const action = editStudent(updatedStudent);
          dispatch(action);
          history.push(`/students/${updatedStudent.id}`);
        });
    }
}

export function destroyStudent (history, student) {

    return function thunk (dispatch) {

      return axios.delete(`/api/students/${student.id}`, {id: student.id})
        .then(() => {
          const action = deleteStudent(student);
          dispatch(action);
          const currentPath = history.location.pathname;
          history.push(currentPath);
        });
    }
}


// REDUCER

export default function studentReducer (state = [], action) {

  switch (action.type) {

    case GET_STUDENTS:
      return action.students;

    case GET_STUDENT:
      return [...state, action.student];

    case EDIT_STUDENT: {
      const studentToEdit = state.find(student => student.id === action.student.id);
      const indexOfStudentToEdit = state.indexOf(studentToEdit);
      let newState = [...state];
      newState.splice(indexOfStudentToEdit, 1, action.student);
      return newState;
    }

    case DELETE_STUDENT: {
      const studentToDelete = state.find(student => student.id === action.student.id);
      const indexOfStudentToDelete = state.indexOf(studentToDelete);
      let newState = [...state];
      newState.splice(indexOfStudentToDelete, 1);
      return newState;
    }

    default:
      return state;
  }
}

