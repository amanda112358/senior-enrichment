import React, { Component } from 'react';
import { connect } from 'react-redux';
import { writeCampusName, postCampus, writeCampusDescription } from '../reducers';
import Campuses from './Campuses';


function CampusForm (props) {

  const { campusEntry, handleInputChange, handleSubmit } = props;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Create a Campus</label>
          <input
            value={campusEntry.campusName}
            onChange={handleInputChange}
            type="text"
            name="campusName"
            placeholder="Enter campus name"
          />
          <input
            value={campusEntry.campusDescription}
            onChange={handleInputChange}
            type="text"
            name="campusDescription"
            placeholder="Enter campus description"
          />
        </div>
        <div>
          <button type="submit">Create Campus</button>
        </div>
      </form>
    </div>
  )
}

const mapStateToProps = function (state) {
  return {
    campusEntry: state.campusEntry
  }
};

const mapDispatchToProps = function (dispatch) {
  return {
    handleInputChange (event) {
      const input = event.target.value;
      const field = event.target.name;
      if (field === 'campusName') dispatch(writeCampusName(input));
      if (field === 'campusDescription') dispatch(writeCampusDescription(input));
    },
    handleSubmit (event) {
      event.preventDefault();
      const name = event.target.campusName.value;
      const description = event.target.campusDescription.value;
      dispatch(postCampus({ name, description }));
      dispatch(writeCampusName(''));
      dispatch(writeCampusDescription(''));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CampusForm);
