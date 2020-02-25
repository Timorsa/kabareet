import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo round-obj"></div>
      <ul className="nav">
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/about">
          About
        </Link>
        <Link className="nav-link" to="/communities">
          Communities
        </Link>
        <Link className="nav-link" to="/events">
          Events
        </Link>
        <Link className="nav-link" to="/contact">
          Contact
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
