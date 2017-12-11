import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import Students from './Students';
import { destroyCampus } from '../reducers';


const SingleCampus = (props) => {

  const { campus, deleteCampus, history } = props;

  return campus
  ? (
    <div>
      <Link to={`/campuses/${campus.id}/edit-campus`}>Edit</Link>
      <ul>
        <li>Selected Campus: {campus.name}</li>
        <li>Description: {campus.description}</li>
      </ul>
      <img src={`${campus.imgUrl}`} />
      <Students campusId={campus.id} history={history}/>
      <button onClick={() => deleteCampus(campus.id)}>Delete Campus</button>
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
    deleteCampus: (campusId) => dispatch(destroyCampus(ownProps.history, campusId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleCampus);
