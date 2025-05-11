import React from 'react';
import "./navbar.scss";
import Sidebar from '../sidebar/Sidebar';
const Navbar = () => {
  return (
    <div className='navbar' id="HomePage">
      <div className='logo'>
        <h1>مرعي</h1>
        <div className='boxbtn'>
          <a href='/Abdelrohman-Mousa-Front-end.pdf' target="_blank" rel="noopener noreferrer"
            style={{textDecoration:"none"}}
          >
          <h3>Download CV</h3>
          </a>
          <a href='#Contact ME' style={{textDecoration:"none"}} 
          className='cont'
          >
          <h3>Contact ME</h3></a>
         <Sidebar />
        </div>
      </div>
    </div>
  )
}

export default Navbar
