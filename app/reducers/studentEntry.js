import axios from 'axios';

// ACTION TYPES
const WRITE_STUDENT_FIRST_NAME = 'WRITE_STUDENT_FIRST_NAME';
const WRITE_STUDENT_LAST_NAME = 'WRITE_STUDENT_LAST_NAME';
const WRITE_STUDENT_EMAIL = 'WRITE_STUDENT_EMAIL';
const WRITE_STUDENT_GPA = 'WRITE_STUDENT_GPA';

// ACTION CREATORS
export const writeStudentFirstName = (firstName) => {
  return {
    type: WRITE_STUDENT_FIRST_NAME,
    firstName
  }
}

export const writeStudentLastName = (lastName) => {
  return {
    type: WRITE_STUDENT_LAST_NAME,
    lastName
  }
}

export const writeStudentEmail = (email) => {
  return {
    type: WRITE_STUDENT_EMAIL,
    email
  }
}

export const writeStudentGPA = (gpa) => {
  return {
    type: WRITE_STUDENT_GPA,
    gpa
  }
}

// REDUCER
export default function campusEntryReducer (state = {}, action) {
  switch(action.type) {

    case WRITE_STUDENT_FIRST_NAME:
      return {...state, firstName: action.firstName};

    case WRITE_STUDENT_LAST_NAME:
      return {...state, lastName: action.lastName};

    case WRITE_STUDENT_EMAIL:
      return {...state, email: action.email};

    case WRITE_STUDENT_GPA:
      return {...state, gpa: action.gpa};

    default:
      return state;
  }
}
