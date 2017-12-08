import axios from 'axios';
// import socket from '../socket';


// ACTION TYPES

const GET_CAMPUSES = 'GET_CAMPUSES';
const GET_CAMPUS = 'GET_CAMPUS';

// ACTION CREATORS

export const getCampuses = (campuses) => {
  return {
    type: GET_CAMPUSES,
    campuses
  }
}

export const getCampus = (campus) => {
  return {
    type: GET_CAMPUS,
    campus
  }
}

// THUNK CREATORS

export function fetchCampuses () {

      return function thunk (dispatch) {
        return axios.get('/api/campuses')
          .then(res => res.data)
          .then(campuses => {
            const action = getCampuses(campuses);
            dispatch(action);
          });
      }
  }

export function postCampus (campus, history) {

    return function thunk (dispatch) {

      return axios.post('/api/campuses', campus)
        .then(res => res.data)
        .then(newCampus => {
          const action = getCampus(newCampus);
          dispatch(action);
          // socket.emit('new-student', newStudent);
          // history.push(`/students/${newStudent.id}`);
        });
    }
}

export function putCampus (campus, history) {

    return function thunk (dispatch) {

      return axios.put(`/api/campuses/${campus.id}`, campus)
        .then(res => res.data)
        .then(updatedCampus => {
          const action = getCampus(updatedCampus);
          dispatch(action);
          // socket.emit('new-student', newStudent);
          // history.push(`/students/${newStudent.id}`);
        });
    }
}


// REDUCER

export default function campusReducer (state = [], action) {

  switch (action.type) {

    case GET_CAMPUSES:
      return action.campuses;

    case GET_CAMPUS:
      return [...state, action.campus];

    default:
      return state;
  }
}

