import React, { Component } from 'react';
import { connect } from 'react-redux';
import { writeCampusName, postCampus, writeCampusDescription } from '../reducers';
import CampusForm from './CampusForm';
import store from '../store';


class NewCampus extends Component {

  componentDidMount() {
    store.dispatch(writeCampusName(''));
    store.dispatch(writeCampusDescription(''));
  }

  render() {
    return (
      <CampusForm
        label={'Create a Campus'}
        handleSubmit={this.props.handleSubmit}
        buttonText={'Create Campus'}
      />
    )
  }
}

const mapDispatchToProps = function (dispatch) {
  return {
    handleChange (event) {
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

export default connect(mapDispatchToProps)(NewCampus);
