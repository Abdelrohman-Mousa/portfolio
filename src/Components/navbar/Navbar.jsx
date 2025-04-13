import React from 'react';
import "./navbar.scss";
import Sidebar from '../sidebar/Sidebar';
const Navbar = () => {
  return (
    <div className='navbar' id="HomePage">
      <div className='logo'>
        <h1>مرعي</h1>
        <div className='boxbtn'>
          <h3>Download CV</h3>
          <a href='#Contact ME' style={{textDecoration:"none"}}><h3>Contact ME</h3></a>

          {/* Sidebar */}
         <Sidebar />
        </div>
      </div>
    </div>
  )
}

export default Navbar
