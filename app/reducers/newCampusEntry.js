
// ACTION TYPE
const CREATE_CAMPUS = 'CREATE_CAMPUS';

// ACTION CREATOR
export const createCampus = (campusName) => {
  return {
    type: CREATE_CAMPUS,
    campusName
  }
}

// REDUCER
export default function newCampusReducer(state = '', action) {
  return action.type === CREATE_CAMPUS ? action.campusName : state;
}
