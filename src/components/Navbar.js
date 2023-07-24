import React from 'react';
import logo from '../assets/planet.png';

function Navbar() {
  return (
    <nav>
      <img className="nav-logo" src={logo} width={40} alt="Navbar logo" />

    </nav>
  );
}

export default Navbar;
