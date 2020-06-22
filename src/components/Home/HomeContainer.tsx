import React from 'react';
import './HomeContainer.css';
import Navbar from '../Navbar/Navbar';

const HomeContainer = () => {
  return (
    <div id = 'HomeContainer'>
      <Navbar/>
      <div id = 'HomeText'>
        Hi, I'm Eric
      </div>
      <div></div>
    </div>
  )
}

export default HomeContainer
