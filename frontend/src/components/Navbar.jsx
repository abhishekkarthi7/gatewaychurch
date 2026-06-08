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
    <nav className="navbar-sbr">
      <div className="sbr-brand-container">
        <img src="/LOGO.jpeg" alt="Gateway Church Logo" className="sbr-brand-logo" />
        <span className="sbr-brand-left">GATEWAY CHURCH</span>
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
      </div>

      <ul className={`nav-links-sbr ${isOpen ? 'active' : ''}`}>
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? "nav-link-sbr-item active" : "nav-link-sbr-item"} onClick={closeMenu}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/events" className={({ isActive }) => isActive ? "nav-link-sbr-item active" : "nav-link-sbr-item"} onClick={closeMenu}>
            Events
          </NavLink>
        </li>
        <li>
          <NavLink to="/offerings" className={({ isActive }) => isActive ? "nav-link-sbr-item active" : "nav-link-sbr-item"} onClick={closeMenu}>
            Giving
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link-sbr-item active" : "nav-link-sbr-item"} onClick={closeMenu}>
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
