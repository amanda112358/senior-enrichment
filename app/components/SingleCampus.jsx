import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Students from './Students';


function SingleCampus (props) {

  const { campus } = props;

  return campus
  ? (
    <div>
      <Link to={`/campuses/${campus.id}/edit-campus`}>Edit</Link>
      <ul>
        <li>Selected Campus: {campus.name}</li>
        <li>Description: {campus.description}</li>
      </ul>
      <img src={`${campus.imgUrl}`} />
      <Students students={campus.students} />
    </div>
  )
  : <h1>Loading...</h1>
}

const mapStateToProps = function (state, ownProps) {
  const campusId = Number(ownProps.match.params.campusId);
  return {
    campus: state.campuses.find(campus => campus.id === campusId)
  };
}

export default connect(mapStateToProps)(SingleCampus);
