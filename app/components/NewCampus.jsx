import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postCampus, writeCampusName, writeCampusDescription } from '../reducers';
import CampusForm from './CampusForm';


class NewCampus extends Component {

  componentDidMount() {
    this.props.setInputToEmpty();
  }

  render() {
    return (
      <CampusForm
        label={'Create a Campus'}
        postOrPut={postCampus}
        buttonText={'Create Campus'}
      />
    )
  }
}

const mapDispatchToProps = function (dispatch) {
  return {
    setInputToEmpty () {
      dispatch(writeCampusName(''));
      dispatch(writeCampusDescription(''));
    }
  };
};

export default connect(null, mapDispatchToProps)(NewCampus);
