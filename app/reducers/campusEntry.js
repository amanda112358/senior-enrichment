import axios from 'axios';

// ACTION TYPE
const WRITE_CAMPUS_NAME = 'WRITE_CAMPUS_NAME';
const WRITE_CAMPUS_DESCRIPTIOIN = 'WRITE_CAMPUS_DESCRIPTION';

// ACTION CREATOR
export const writeCampusName = (campusName) => {
  return {
    type: WRITE_CAMPUS_NAME,
    campusName
  }
}

export const writeCampusDescription = (campusDescription) => {
  return {
    type: WRITE_CAMPUS_DESCRIPTIOIN,
    campusDescription
  }
}

// REDUCER
export default function campusEntryReducer (state = {}, action) {
  switch(action.type) {

    case WRITE_CAMPUS_NAME:
      return {...state, campusName: action.campusName};

    case WRITE_CAMPUS_DESCRIPTIOIN:
      return {...state, campusDescription: action.campusDescription};

    default:
      return state;
  }
}
