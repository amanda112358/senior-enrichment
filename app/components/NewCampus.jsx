import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postCampus, writeCampusName, writeCampusDescription } from '../reducers';
import CampusForm from './CampusForm';


export default class NewCampus extends Component {

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
