import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="hero">
        <h1 className="animate-fade-in">
          Experience God's Love at <br />
          <span className="text-gradient">Gateway Church Gummuluru</span>
        </h1>
        <p className="animate-fade-in delay-1">
          A vibrant community dedicated to worship, fellowship, and making a profound impact. Come exactly as you are, you are welcome here!
        </p>
        <div className="animate-fade-in delay-2">
          <Link to="/events" className="btn">Plan Your Visit</Link>
          <Link to="/about" className="btn btn-secondary">Our Beliefs</Link>
        </div>
      </section>

      {/* Ministries */}
      <section className="section">
        <div className="section-header">
          <h2>Find Your Community</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>There's a place for everyone to grow and serve.</p>
        </div>
        <div className="grid">
          <Link to="/ministries/kids" className="image-card">
            <img src="https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Kids Ministry" className="bg-img" />
            <div className="image-card-content">
              <h3 className="image-card-title">Kids Ministry</h3>
              <p className="image-card-text">A safe, fun environment where children learn biblical truths through interactive lessons and worship.</p>
              <div className="image-card-arrow">
                Learn More <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </div>
            </div>
          </Link>
          <Link to="/ministries/youth" className="image-card">
            <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Gateway Youth" className="bg-img" />
            <div className="image-card-content">
              <h3 className="image-card-title">Gateway Youth</h3>
              <p className="image-card-text">Empowering teenagers to build a strong foundation of faith and discover their God-given identity.</p>
              <div className="image-card-arrow">
                Learn More <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </div>
            </div>
          </Link>
          <Link to="/ministries/missions" className="image-card">
            <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Global Missions" className="bg-img" />
            <div className="image-card-content">
              <h3 className="image-card-title">Global Missions</h3>
              <p className="image-card-text">Taking the gospel beyond our walls by supporting global missionaries and local outreach programs.</p>
              <div className="image-card-arrow">
                Learn More <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Premium Footer */}
      <footer className="footer-premium">
        <div className="footer-top">
          <div className="footer-logo">
            <h2 style={{ color: 'white', marginBottom: '0.5rem', fontFamily: 'var(--heading-font)' }}>GATEWAY<br/>CHRISTIAN CHURCH</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.95rem', marginTop: '1rem' }}>Gummuluru - Korukonda, AP</p>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4>Locations</h4>
              <Link to="/about">Service Times</Link>
              <Link to="/about">What to Expect</Link>
            </div>
            <div className="footer-column">
              <h4>Watch</h4>
              <Link to="/">Watch Live</Link>
              <Link to="/events">Sermon Library</Link>
            </div>
            <div className="footer-column">
              <h4>Find Your Place</h4>
              <Link to="/events">Events</Link>
              <Link to="/ministries/youth">Groups</Link>
              <Link to="/offerings">Give</Link>
            </div>
          </div>
        </div>
        <div className="footer-contact-banner">
          <div>
            <h3 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '0.5rem', fontWeight: '700' }}>Get in touch.</h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)' }}>We'd love to hear from you.</p>
          </div>
          <div className="footer-contact-buttons">
            <a href="tel:+919966178555" className="btn-outline">Call Us: +91 9966178555</a>
            <Link to="/about" className="btn-outline">Contact Us</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
