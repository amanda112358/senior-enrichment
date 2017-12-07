import axios from 'axios';

// ACTION TYPE
const WRITE_STUDENT_NAME = 'WRITE_STUDENT_NAME';

// ACTION CREATOR
export const writeStudentName = (studentName) => {
  return {
    type: WRITE_STUDENT_NAME,
    studentName
  }
}

// REDUCER
export default function studentEntryReducer(state = '', action) {
  return action.type === WRITE_STUDENT_NAME ? action.studentName : state;
}
