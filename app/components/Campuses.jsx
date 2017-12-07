import React from 'react';
import { Link } from 'react-router-dom';
// import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

function Campuses (props) {
  return (
    <div className="campuses-container">
    {props.campuses.map(campus =>
      <div key={campus.id} className="campus">
        <Link to={`campuses/${campus.id}`}>{campus.name}</Link>
        <img src={`${campus.imgUrl}`} />
      </div>
    )}
      <Link to={`/new-campus`}>Add New Campus</Link>
    </div>
  )
}

const mapStateToProps = function (state) {
  return {
    campuses: state.campuses,
  };
}

export default connect(mapStateToProps)(Campuses);
