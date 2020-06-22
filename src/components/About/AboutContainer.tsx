import React from 'react';
import './AboutContainer.css';
import Navbar from '../Navbar/Navbar';
import AboutHeader from './AboutHeader';

const AboutContainer = () => {
  return (
    <div id = 'AboutContainer'>
      <Navbar/>
      <AboutHeader/>
      <div id = 'AboutText'>
        <p>
          The world is full of amazing things to do. Yet, oftentimes we don't know what
          those things are, or even if we do, we may not have sufficient time to do them. My goal is
          to optimize people's time, preference discovery, and experiences using machine learning
          and statistical inference so they can live their best life.
        </p>
        <br/>
        <p>
          I'm Eric, and I'm a senior at MIT studying computer science with extensive experience
          in computer vision, algorithms, and web development. My current project is on advancing
          learning-based rendering systems for eventual use in virtual reality to democratize
          experiences for everyone.
        </p>



      </div>
      <div></div>
    </div>
  )
}



export default AboutContainer;
