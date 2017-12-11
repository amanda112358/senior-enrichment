import React from 'react';
import { Link } from 'react-router-dom';
// import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

function Campuses (props) {
  return (
    <div>
      <div className="campuses-container">
      {props.campuses.map(campus =>
        <div key={campus.id} className="campus">
          <Link to={`/campuses/${campus.id}`}>
            <img src={`${campus.imageUrl}`} />
          </Link>
          <Link to={`/campuses/${campus.id}`}>{campus.name}</Link>
        </div>
      )}
      </div>
      <div className="new-campus-link-container">
        <Link className="new-campus-link" to={`/new-campus`}>Add New Campus</Link>
      </div>
    </div>
  )
}

const mapStateToProps = function (state) {
  return {
    campuses: state.campuses,
  };
}

export default connect(mapStateToProps)(Campuses);
