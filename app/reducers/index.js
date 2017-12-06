/* combineReducers is not currently used, but eventually should be for modular code :D */
import { combineReducers } from 'redux'

// INITIAL STATE

const initialState = {
  campuses: [],
  students: [],
  selectedCampus: {},
  selectedStudent: {}
};

const reducer = function(state = initialState, action) {
  switch (action.type) {
    default: return state
  }
};

export default reducer;
