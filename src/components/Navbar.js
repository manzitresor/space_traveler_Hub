import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/planet.png';

function Navbar() {
  return (
    <nav>
      <div className="main-logo">
        <img className="nav-logo" src={logo} alt="Navbar logo" />
        <h2>Space Travelers Hub</h2>
      </div>
      <ul className="nav-items">
        <li className="nav-item-list"><NavLink to="/" activeclassname="active"><p className="tab">Rockets</p></NavLink></li>
        <li className="nav-item-list"><NavLink to="/missions" activeclassname="active"><p className="tab">Missions</p></NavLink></li>
        <li className="nav-item-list"><NavLink to="/profile" activeclassname="active"><p className="tab">Profile</p></NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
