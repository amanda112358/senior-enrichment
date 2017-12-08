import React, { Component } from 'react';
import { connect } from 'react-redux';
import { putCampus, writeCampusName, writeCampusDescription } from '../reducers';
import CampusForm from './CampusForm';


class EditCampus extends Component {

  render() {
    return (
      <CampusForm
        campus={this.props.campus}
        label={`Edit Campus`}
        postOrPut={putCampus}
        buttonText={'Submit Changes'}
      />
    )
  }
}

const mapStateToProps = function (state, ownProps) {
  const campusId = Number(ownProps.match.params.campusId);
  const campusToEdit = state.campuses.find(campus => campus.id === campusId)
  return {
    campus: campusToEdit
  };
};


export default connect(mapStateToProps)(EditCampus);
