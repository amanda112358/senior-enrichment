import React from 'react';
import Campuses from './Campuses';
import Footer from './Footer';


export default function Home (props) {

  return (
    <div className="home">
      {/* <h6>Welcome to the Margaret Hamilton Interplanetary Academy of JavaScript.</h6> */}
      <Campuses />
      <Footer />
    </div>
  )
}
