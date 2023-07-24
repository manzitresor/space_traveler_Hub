import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/planet.png';

function Navbar() {
  return (
    <nav>
      <img className="nav-logo" src={logo} width={40} alt="Navbar logo" />
      <ul className="nav-items">
        <li className="nav-item-list"><NavLink to="/" activeClassName="active">Home</NavLink></li>
        <li className="nav-item-list"><NavLink to="/profile" activeClassName="active">Profile</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
