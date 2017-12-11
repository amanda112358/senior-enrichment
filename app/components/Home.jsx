import React from 'react';
import { Link } from 'react-router-dom';
import Campuses from './Campuses'


export default function Home (props) {

  return (
    <div>
      {/* <h6>Welcome to the Margaret Hamilton Interplanetary Academy of JavaScript.</h6> */}
      <Campuses />
    </div>
  )
}
