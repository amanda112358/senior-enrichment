import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


export default function Home (props) {

  return (
    <div>
      <h1>Welcome Home!</h1>
      <Link to={`/new-campus`}>Add New Campus</Link>
      <Link to={`/new-student`}>Add New Student</Link>
    </div>
  )
}
