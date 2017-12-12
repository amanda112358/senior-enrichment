import React from 'react';
import { Link, withRouter } from 'react-router-dom';
// import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

function Campuses (props) {

  const { campuses, history } = props;
  const navigateToNewCampus = () => history.push(`/campuses/new-campus`);

  return (
    <div className="home">
      <div className="campuses-container">
      {campuses.map(campus =>
        <div key={campus.id} className="campus">
          <Link to={`/campuses/${campus.id}`}>
            <img src={`${campus.imageUrl}`} />
          </Link>
          <Link to={`/campuses/${campus.id}`}>{campus.name}</Link>
        </div>
      )}
      </div>
      <div className="button-container">
        <button className="btn-main" onClick={navigateToNewCampus}>Add New Campus</button>
      </div>
    </div>
  )
}

const mapStateToProps = function (state) {
  return {
    campuses: state.campuses,
  };
}

export default withRouter(connect(mapStateToProps)(Campuses));
