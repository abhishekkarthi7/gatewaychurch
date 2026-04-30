import React from 'react';
import { useParams, Link } from 'react-router-dom';

const MinistryDetails = () => {
  const { id } = useParams();

  // Basic ministry data based on the ID
  const ministriesData = {
    kids: {
      title: 'Kids Ministry',
      description: 'We provide a safe, high-energy environment where children learn biblical truths through interactive lessons, worship, and fun activities tailored just for them.',
      icon: '🌱',
      color: '#f089e1ff'
    },
    youth: {
      title: 'Gateway Youth',
      description: 'A dynamic ministry dedicated to empowering teenagers to build a strong foundation of faith, navigate life\'s challenges, and discover their God-given identity.',
      icon: '🔥',
      color: '#b4c8f0ff'
    },
    missions: {
      title: 'Global Missions',
      description: 'Taking the gospel beyond our walls. We actively support missionaries globally and organize local outreach programs to serve the marginalized in our city.',
      icon: '🌍',
      color: '#90e0ef'
    }
  };

  const ministry = ministriesData[id];

  if (!ministry) {
    return (
      <div className="section" style={{ textAlign: 'center' }}>
        <h2>Ministry Not Found</h2>
        <Link to="/" className="btn">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      <section className="section">
        <div className="section-header" style={{ marginBottom: '2rem' }}>
          <span className="card-icon" style={{ fontSize: '4rem', marginBottom: '1rem', display: 'inline-block' }}>{ministry.icon}</span>
          <h1>{ministry.title}</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
            {ministry.description}
          </p>
        </div>

        {/* Realtime Images Section */}
        <div className="card" style={{ marginBottom: '3rem', background: `linear-gradient(to right, ${ministry.color}40, transparent)` }}>
          <h2>Gallery</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Glimpses of our recent activities.</p>
          
          <div className="grid">
            {/* USER INSTRUCTION: INSERT YOUR REALTIME IMAGES HERE */}
            {/* Replace the 'src' with your actual image paths or URLs, e.g., src="/images/kids-1.jpg" */}
            <div style={{ background: '#ddd', height: '200px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#666' }}>
              <p>Insert Image 1 Here</p>
              {/* <img src="YOUR_IMAGE_URL_HERE" alt="Gallery 1" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} /> */}
            </div>
            <div style={{ background: '#ddd', height: '200px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#666' }}>
              <p>Insert Image 2 Here</p>
              {/* <img src="YOUR_IMAGE_URL_HERE" alt="Gallery 2" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} /> */}
            </div>
            <div style={{ background: '#ddd', height: '200px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#666' }}>
              <p>Insert Image 3 Here</p>
              {/* <img src="YOUR_IMAGE_URL_HERE" alt="Gallery 3" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} /> */}
            </div>
          </div>
        </div>

        {/* Upcoming Dates Section */}
        <div className="card">
          <h2>Upcoming Dates & Events</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Mark your calendars for these important dates.</p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {/* USER INSTRUCTION: INSERT YOUR REALTIME DATES HERE */}
            {/* Edit the dates and descriptions below */}
            <div style={{ padding: '1rem', borderLeft: `4px solid ${ministry.color}`, background: 'rgba(0,0,0,0.2)', borderRadius: '0 8px 8px 0' }}>
              <h3 style={{ margin: '0 0 0.5rem 0' }}>Event Name 1</h3>
              <p style={{ color: 'var(--primary)', fontWeight: 'bold', margin: '0 0 0.5rem 0' }}>INSERT DATE HERE (e.g., Sunday, May 15th at 10:00 AM)</p>
              <p style={{ color: 'var(--text-muted)', margin: 0 }}>INSERT DESCRIPTION HERE (e.g., Join us for a special gathering...)</p>
            </div>

            <div style={{ padding: '1rem', borderLeft: `4px solid ${ministry.color}`, background: 'rgba(0,0,0,0.2)', borderRadius: '0 8px 8px 0' }}>
              <h3 style={{ margin: '0 0 0.5rem 0' }}>Event Name 2</h3>
              <p style={{ color: 'var(--primary)', fontWeight: 'bold', margin: '0 0 0.5rem 0' }}>INSERT DATE HERE (e.g., Friday, May 20th at 6:00 PM)</p>
              <p style={{ color: 'var(--text-muted)', margin: 0 }}>INSERT DESCRIPTION HERE (e.g., A time of fellowship and fun...)</p>
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link to="/" className="btn btn-secondary">Back to Home</Link>
        </div>
      </section>
    </div>
  );
};

export default MinistryDetails;
