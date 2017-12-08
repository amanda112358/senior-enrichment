import React, { Component } from 'react';
import { connect } from 'react-redux';
import { putCampus, writeCampusName, writeCampusDescription } from '../reducers';
import CampusForm from './CampusForm';


class EditCampus extends Component {

  componentDidMount() {
    this.props.setInputToExisiting();
  }

  render() {
    return (
      <CampusForm
        label={`Edit Campus`}
        postOrPut={putCampus}
        buttonText={'Done'}
      />
    )
  }
}

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    setInputToExisiting() {
      // // const campusToEdit =
      // dispatch(writeCampusName(campusToEdit.name));
      // dispatch(writeCampusDescription(campusToEdit.description));
    }
  };
};

export default connect(null, mapDispatchToProps)(EditCampus);
