import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
          const currentProgress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
          setScrollProgress(currentProgress);

          if (window.scrollY > 40) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div 
        className="scroll-progress-bar" 
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <header className={`main-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container-centered">
          <NavLink to="/" className="double-logo-wrapper" onClick={closeMenu}>
            <div className="logo-img-box">
              <img 
                src="/LOGO.jpeg" 
                alt="Gateway Church Logo" 
                className="logo-left-img" 
              />
            </div>
            <div className="logo-right-text">
              <span className="logo-brand-title">Gateway <span className="title-gradient-accent">Church</span></span>
              <span className="logo-brand-sub">THE MESSAGE FOR THE WORLD</span>
            </div>
          </NavLink>

          <button 
            className={`menu-toggle ${isOpen ? 'open' : ''}`} 
            onClick={toggleMenu}
            aria-label="Toggle Navigation Menu"
            type="button"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={`nav-links-centered ${isOpen ? 'active' : ''}`}>
            <li className="mobile-only mobile-menu-header">
              <img src="/LOGO.jpeg" alt="Gateway Church Logo" className="mobile-menu-logo" />
              <div className="mobile-menu-text">
                <span className="mobile-menu-title">Gateway <span style={{ color: 'var(--color-gold)' }}>Church</span></span>
                <span className="mobile-menu-sub">THE MESSAGE FOR THE WORLD</span>
              </div>
            </li>

            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} 
                onClick={closeMenu}
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about" 
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} 
                onClick={closeMenu}
              >
                ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/events" 
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} 
                onClick={closeMenu}
              >
                EVENTS
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/offerings" 
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} 
                onClick={closeMenu}
              >
                GIVING
              </NavLink>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Navbar;
