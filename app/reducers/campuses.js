import axios from 'axios';
// import socket from '../socket';


// ACTION TYPES

const GET_CAMPUSES = 'GET_CAMPUSES';
const GET_CAMPUS = 'GET_CAMPUS';
const EDIT_CAMPUS = 'EDIT_CAMPUS';
const DELETE_CAMPUS = 'DELETE_CAMPUS';

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

export const editCampus = (campus) => {
  return {
    type: EDIT_CAMPUS,
    campus
  }
}

export const deleteCampus = (campus) => {
  return {
    type: DELETE_CAMPUS,
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

export function postCampus (history, campusData) {

    return function thunk (dispatch) {

      return axios.post('/api/campuses', campusData)
        .then(res => res.data)
        .then(newCampus => {
          const action = getCampus(newCampus);
          dispatch(action);
          history.push(`/campuses/${newCampus.id}`);
        });
    }
}

export function putCampus (history, campusData, campusId) {

    return function thunk (dispatch) {

      return axios.put(`/api/campuses/${campusId}`, campusData)
        .then(res => res.data)
        .then(updatedCampus => {
          const action = editCampus(updatedCampus);
          dispatch(action);
          history.push(`/campuses/${updatedCampus.id}`);
        });
    }
}

export function destroyCampus (history, campus) {

    return function thunk (dispatch) {

      return axios.delete(`/api/campuses/${campus.id}`, {id: campus.id})
        .then(() => {
          const action = deleteCampus(campus);
          dispatch(action);
          history.push(`/campuses/`);
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

    case EDIT_CAMPUS: {
      const campusToEdit = state.find(campus => campus.id === action.campus.id);
      const indexOfcampusToEdit = state.indexOf(campusToEdit);
      let newState = [...state];
      newState.splice(indexOfcampusToEdit, 1, action.campus);
      return newState;
    }

    case DELETE_CAMPUS: {
      const campusToDelete = state.find(campus => campus.id === action.campusId);
      const indexOfcampusToDelete = state.indexOf(campusToDelete);
      let newState = [...state];
      newState.splice(indexOfcampusToDelete, 1);
      return newState;
    }

    default:
      return state;
  }
}

