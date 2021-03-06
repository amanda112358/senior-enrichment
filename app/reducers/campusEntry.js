import axios from 'axios';

// ACTION TYPES
const WRITE_CAMPUS_NAME = 'WRITE_CAMPUS_NAME';
const WRITE_CAMPUS_DESCRIPTION = 'WRITE_CAMPUS_DESCRIPTION';

// ACTION CREATORS
export const writeCampusName = (campusName) => {
  return {
    type: WRITE_CAMPUS_NAME,
    campusName
  }
}

export const writeCampusDescription = (campusDescription) => {
  return {
    type: WRITE_CAMPUS_DESCRIPTION,
    campusDescription
  }
}

const initialState = {
  campusName: '',
  campusDescription: ''
};

// REDUCER
export default function campusEntryReducer (state = initialState, action) {
  switch(action.type) {

    case WRITE_CAMPUS_NAME:
      return {...state, campusName: action.campusName};

    case WRITE_CAMPUS_DESCRIPTION:
      return {...state, campusDescription: action.campusDescription};

    default:
      return state;
  }
}
