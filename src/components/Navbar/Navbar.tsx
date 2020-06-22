import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div id='NavbarContainer'>
      <ul id="Navbar">
        <li className='NavbarItem'><a href="/">Home</a></li>
        <li className='NavbarItem'><a href="/me">About Me</a></li>
        <li className='NavbarItem'><a href="/travel">Travel</a></li>
        <li className='NavbarItem'><a href="/blog">Blog</a></li>
      </ul>
    </div>
  );
}

export default Navbar
