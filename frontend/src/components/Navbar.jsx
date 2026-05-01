import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <NavLink to="/" className="logo" onClick={closeMenu}>
        <img src="/logo.jpg" alt="Gateway Church" className="logo-img" />
        <span className="logo-text">Gateway<span> Church</span></span>
      </NavLink>
      
      <div className="menu-icon" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
      </div>

      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={closeMenu}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/events" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={closeMenu}>
            Events
          </NavLink>
        </li>
        <li>
          <NavLink to="/offerings" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={closeMenu}>
            Giving
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={closeMenu}>
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
