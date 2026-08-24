import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const slideshowImages = [
    '/SnapsByRajsh-10.jpg',
    'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1510590337019-5ef8d3d32116?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  ];

  const backgroundVideos = ['/WORSHIP.mp4', '/PRAYER.mp4'];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % slideshowImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleVideoEnded = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % backgroundVideos.length);
  };

  return (
    <div className="animate-fade-in">
      {/* SBR Video Hero Section */}
      <section className="sbr-hero">
        <div className="sbr-video-container">
          <video 
            key={currentVideoIndex}
            autoPlay 
            muted 
            playsInline 
            className="sbr-video-bg"
            onEnded={handleVideoEnded}
          >
            <source src={backgroundVideos[currentVideoIndex]} type="video/mp4" />
          </video>
          <div className="sbr-video-overlay"></div>
        </div>

        {/* Hero Content Layout */}
        <div className="sbr-hero-content">
          {/* Left Column: Decreased & Refined Text */}
          <div className="sbr-hero-left">
            <h1 className="sbr-hero-title animate-fade-in">
              GATEWAY CHURCH
            </h1>
            <h2 className="sbr-hero-subtitle animate-fade-in delay-1">
              Worship • Fellowship • Community
            </h2>
            <p className="sbr-hero-description animate-fade-in delay-1">
              Gateway Church Gummuluru is a place where faith comes alive and hearts connect. We are a family of believers devoted to worshiping God, cultivating authentic fellowship, and extending His grace to our community. No matter where you are on your spiritual journey, there is a place for you here.
            </p>
            <div className="sbr-hero-buttons animate-fade-in delay-2">
              <Link to="/offerings" className="sbr-btn-gold">Online Giving</Link>
              <Link to="/events" className="sbr-btn-outline">Upcoming Events</Link>
            </div>
          </div>

          {/* Right Column: Square & Increased Size Slideshow Card */}
          <div className="sbr-hero-right animate-fade-in delay-2">
            <div className="sbr-slideshow-card">
              <img 
                src={slideshowImages[currentImageIndex]} 
                alt="Gateway Church Memories" 
                className="sbr-slideshow-img" 
              />
              <div className="sbr-slideshow-badge">GATEWAY MEMORIES</div>
            </div>
          </div>
        </div>
      </section>

      {/* Ministries Section */}
      <section className="section container">
        <div className="section-header">
          <h2>Find Your <span className="text-gradient">Community</span></h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem' }}>There's a place for everyone to grow and serve.</p>
        </div>
        <div className="grid">
          <Link to="/about" className="image-card">
            <img src="https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Kids Ministry" className="bg-img" />
            <div className="image-card-content">
              <h3 className="image-card-title">Kids Ministry</h3>
              <p className="image-card-text">A safe, fun environment where children learn biblical truths through interactive lessons and worship.</p>
              <div className="image-card-arrow">
                Learn More &rarr;
              </div>
            </div>
          </Link>
          <Link to="/about" className="image-card">
            <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Gateway Youth" className="bg-img" />
            <div className="image-card-content">
              <h3 className="image-card-title">Gateway Youth</h3>
              <p className="image-card-text">Empowering teenagers to build a strong foundation of faith and discover their God-given identity.</p>
              <div className="image-card-arrow">
                Learn More &rarr;
              </div>
            </div>
          </Link>
          <Link to="/about" className="image-card">
            <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Global Missions" className="bg-img" />
            <div className="image-card-content">
              <h3 className="image-card-title">Global Missions</h3>
              <p className="image-card-text">Taking the gospel beyond our walls by supporting global missionaries and local outreach programs.</p>
              <div className="image-card-arrow">
                Learn More &rarr;
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
              <a href="https://youtube.com/@gatewaychurch7829?si=kXod6rqJG6LZZS9_" target="_blank" rel="noopener noreferrer">Watch Live</a>
              <Link to="/events">Sermon Library</Link>
            </div>
            <div className="footer-column">
              <h4>Find Your Place</h4>
              <Link to="/events">Events</Link>
              <Link to="/offerings">Give</Link>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; 2026 GATE VILLAGE CHURCH. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;
