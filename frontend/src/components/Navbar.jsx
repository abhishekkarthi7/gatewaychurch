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
          // Scroll progress calculation
          const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
          const currentProgress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
          setScrollProgress(currentProgress);

          // Header shrink toggle threshold
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
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile drawer on route change
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
      {/* Top Scroll Progress Indicator Bar */}
      <div 
        className="scroll-progress-bar" 
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <header className={`main-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container-centered">
          {/* Left Brand: Church Logo & Text */}
          <NavLink to="/" className="double-logo-wrapper" onClick={closeMenu}>
            <div className="logo-img-box">
              <img 
                src="/LOGO.jpeg" 
                alt="Gate Village Church Logo" 
                className="logo-left-img" 
              />
            </div>
            <div className="logo-right-text">
              <span className="logo-brand-title">GATE VILLAGE CHURCH</span>
              <span className="logo-brand-sub">THE MESSAGE FOR THE WORLD</span>
            </div>
          </NavLink>

          {/* Mobile Hamburger Toggle */}
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

          {/* Right Navigation Links & Socials */}
          <ul className={`nav-links-centered ${isOpen ? 'active' : ''}`}>
            {/* Mobile Header Inside Drawer */}
            <li className="mobile-only mobile-menu-header">
              <img src="/LOGO.jpeg" alt="Gate Village Logo" className="mobile-menu-logo" />
              <div className="mobile-menu-text">
                <span className="mobile-menu-title">GATE VILLAGE</span>
                <span className="mobile-menu-sub">CHURCH</span>
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

            {/* Desktop Action / Social Icons */}
            <li className="desktop-social-link">
              <a 
                href="https://youtube.com/@gatewaychurch7829?si=kXod6rqJG6LZZS9_" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Watch on YouTube"
                title="Watch on YouTube"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </li>
            <li className="desktop-social-link">
              <a 
                href="tel:+919966178555" 
                aria-label="Call Church Office"
                title="Call: +91 9966178555"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-2.2 2.2a15.053 15.053 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1.01A11.36 11.36 0 0 1 8.57 3.9c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.52c0-.55-.45-1-1-1z"/>
                </svg>
              </a>
            </li>

            {/* Mobile Drawer Socials & Contact */}
            <li className="mobile-only mobile-menu-socials">
              <a 
                href="https://youtube.com/@gatewaychurch7829?si=kXod6rqJG6LZZS9_" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="YouTube"
                className="mobile-social-btn youtube"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <span>YouTube</span>
              </a>
              <a 
                href="tel:+919966178555" 
                aria-label="Call Church"
                className="mobile-social-btn call"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-2.2 2.2a15.053 15.053 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1.01A11.36 11.36 0 0 1 8.57 3.9c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.52c0-.55-.45-1-1-1z"/>
                </svg>
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Navbar;
