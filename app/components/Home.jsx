import React, { Component } from 'react';
import Navbar from './Navbar';
import Campuses from './Campuses';

export default function Home (props) {
  return (
    <div>
      <Navbar />
      <Campuses />
    </div>
  )
}
