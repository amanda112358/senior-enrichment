import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { withRouter, NavLink } from 'react-router-dom';

export default function Navbar (props) {
  return (
    <nav className="navbar-container">
      <div className="nav-item">
      <Link to={`/`}>Home</Link>
      </div>
      <div className="nav-item">
        <Link to={`/campuses`}>Campuses</Link>
      </div>
      <div className="nav-item">
        <Link to={`/students`}>Students</Link>
      </div>
    </nav>
  )
}
