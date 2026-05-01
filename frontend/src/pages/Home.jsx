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

      {/* Welcome Message */}
      <section className="section">
        <div className="card" style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto', background: 'linear-gradient(to right, #f089e1ff, #b4c8f0ff)' }}>
          <h2>A Place to Belong</h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
            "For where two or three gather in my name, there am I with them." - Matthew 18:20
            <br /><br />
            At Gateway Church, everyone has a unique purpose and a place in God's family. Come experience the transformational power of Jesus Christ!
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }}>
            <div>
              <h3 className="text-gradient">7:30 AM</h3>
              <p style={{ color: 'var(--text-muted)' }}>Sunday Service</p>
            </div>
            <div>
              <h3 className="text-gradient">11:00 AM</h3>
              <p style={{ color: 'var(--text-muted)' }}>Sunday School</p>
            </div>
          </div>
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

      {/* Footer */}
      <footer className="footer">
        <h2>Gateway <span className="text-gradient">Church</span></h2>
        <p style={{ margin: '1rem 0' }}>Gummuluru - korukonda , Andhra pradesh </p>
        <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>&copy; {new Date().getFullYear()} Gateway Church Gummuluru  .  All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
