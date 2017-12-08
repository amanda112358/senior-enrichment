import React from 'react';
import { Link } from 'react-router-dom';
import Campuses from './Campuses'


export default function Home (props) {

  return (
    <div>
      <h1>Welcome Home!</h1>
      <Link to={`/new-student`}>Add New Student</Link>
      <Campuses />
    </div>
  )
}
