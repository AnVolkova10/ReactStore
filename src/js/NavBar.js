import React from 'react';
import '../css/NavBar.css';
import logo from '../img/logo.svg';

function NavBar() {
    return(
      <nav className="navbar">
        <img src={logo} className="App-logo" alt="logo" />
      </nav>
    );
}

export { NavBar };