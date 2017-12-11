import React from 'react';
import { connect } from 'react-redux';
import { putCampus } from '../reducers';
import CampusForm from './CampusForm';


const EditCampus = (props) => {
  return (
    <CampusForm
      campus={this.props.campus}
      label={`Edit Campus`}
      postOrPut={putCampus}
      buttonText={'Submit Changes'}
      history={props.history}
    />
  )
}

const mapStateToProps = function (state, ownProps) {
  const campusId = Number(ownProps.match.params.campusId);
  const campusToEdit = state.campuses.find(campus => campus.id === campusId)
  return {
    campus: campusToEdit
  };
};


export default connect(mapStateToProps)(EditCampus);
