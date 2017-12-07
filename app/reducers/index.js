import { combineReducers } from 'redux';
import campuses from './campuses';
import students from './students';
import campusEntry from './campusEntry';
import studentEntry from './studentEntry';


// COMBINE REDUCERS

const rootReducer = combineReducers({
  campuses,
  students,
  campusEntry,
  studentEntry
})

export default rootReducer;

export * from './campuses';
export * from './students';
export * from './campusEntry';
export * from './studentEntry';
