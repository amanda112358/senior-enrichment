import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Students from './Students';


function SingleCampus (props) {

  const campusId = Number(props.match.params.campusId);
  const selectedCampus = props.campuses.find(campus => campus.id === campusId);
  console.log('!!', campusId);
  console.log(selectedCampus);

  return (
    <div>
      <ul>
        <li>Selected Campus: {selectedCampus.name}</li>
        <li>Description: {selectedCampus.description}</li>
      </ul>
      <img src={`${selectedCampus.imgUrl}`} />
      <Link to={`/campuses/${selectedCampus.id}/edit-campus`}>Edit</Link>
      <Students students={selectedCampus.students} />
    </div>
  )
}

const mapStateToProps = function (state) {
  return {
    campuses: state.campuses
  };
}

export default connect(mapStateToProps)(SingleCampus);
