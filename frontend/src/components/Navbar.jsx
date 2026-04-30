import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" className="logo">
        Gateway<span> Church</span>
      </NavLink>
      <ul className="nav-links">
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/events" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Events
          </NavLink>
        </li>
        <li>
          <NavLink to="/offerings" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Giving
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
