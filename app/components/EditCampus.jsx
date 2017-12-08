import React from 'react';
import { connect } from 'react-redux';
import { writeCampusName, putCampus, writeCampusDescription } from '../reducers';
import CampusForm from './CampusForm';
import store from '../store';


function EditCampus (props) {
  const { campuses, handleSubmit } = props;
  const campusId = Number(props.match.params.campusId);
  const campusToEdit = campuses.find(campus => campus.id === campusId);

  store.dispatch(writeCampusName(campusToEdit.name));
  store.dispatch(writeCampusDescription(campusToEdit.description));

  return (
    <CampusForm
      label={`Edit Campus`}kml0-
      handleSubmit={handleSubmit}
      buttonText={'Done'}
    />
  )
}

const mapStateToProps = function (state) {
  return {
    campuses: state.campuses
  }
};

const mapDispatchToProps = function (dispatch) {
  return {
    handleSubmit (event) {
      event.preventDefault();
      const name = event.target.campusName.value;
      const description = event.target.campusDescription.value;
      dispatch(putCampus({ name, description }));
      dispatch(writeCampusName(''));
      dispatch(writeCampusDescription(''));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditCampus);
