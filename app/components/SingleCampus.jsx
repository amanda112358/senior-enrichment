import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import Students from './Students';
import { destroyCampus } from '../reducers';

const SingleCampus = (props) => {

  const { campus, confirmDelete, history } = props;

  const navigateToNewStudent = () => history.push(`/campuses/${campus.id}/new-student`);
  const navigateToEditCampus = () => history.push(`/campuses/${campus.id}/edit-campus`);

  return campus
  ? (
    <div className="campus-container">
      <div className="campus-bio">
          <img src={`${campus.imageUrl}`} />
          <h3>{campus.name}</h3>
        <div className="campus-description">
          <span>{campus.description}</span>
        </div>
      </div>
      <Students campus={campus} history={history} />
      <div className="buttons-container">
        <button className="btn-add-new-student" onClick={navigateToNewStudent}>+ New Student</button>
        <div>
          <button className="btn-main" onClick={navigateToEditCampus}>Edit Campus</button>
          <button className="btn-main" onClick={() => confirmDelete(campus)}>Delete Campus</button>
        </div>
      </div>
    </div>
  )
  : <h1>Loading...</h1>
}

const mapStateToProps = (state, ownProps) => {
  const campusId = Number(ownProps.match.params.campusId);
  return {
    campus: state.campuses.find(campus => campus.id === campusId)
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    confirmDelete: (campus) => {
      const confirmDelete = `Are you sure you want to remove all records of ${campus.name}, including its students?`;
      if (confirm(confirmDelete)) dispatch(destroyCampus(ownProps.history, campus))
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SingleCampus));
