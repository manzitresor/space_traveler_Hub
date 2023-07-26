import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/planet.png';

function Navbar() {
  return (
    <nav>
      <img className="nav-logo" src={logo} width={40} alt="Navbar logo" />
      <ul className="nav-items">
        <li className="nav-item-list"><NavLink to="/" activeclassname="active"><p className="tab">Rockets</p></NavLink></li>
        <li className="nav-item-list"><NavLink to="/missions" activeclassname="active"><p className="tab">Missions</p></NavLink></li>
        <li className="nav-item-list"><NavLink to="/profile" activeclassname="active"><p className="tab">Profile</p></NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
