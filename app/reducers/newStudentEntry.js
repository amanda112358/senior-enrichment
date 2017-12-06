
// ACTION TYPE
const CREATE_STUDENT = 'CREATE_STUDENT';

// ACTION CREATOR
export const createCampus = (studentName) => {
  return {
    type: CREATE_STUDENT,
    studentName
  }
}

// REDUCER
export default function newStudentReducer(state = '', action) {
  return action.type === CREATE_STUDENT ? action.studentName : state;
}
