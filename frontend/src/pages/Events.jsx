import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, you would fetch from your FastAPI backend:
    // axios.get('http://localhost:8000/events/').then(res => setEvents(res.data))

    // For demonstration, using mock data if API is not running
    const fetchEvents = async () => {
      try {
        const res = await axios.get('http://localhost:8000/events/');
        setEvents(res.data);
      } catch (err) {
        console.log("Using mock events, backend might not be running.");
        setEvents([
          { id: 1, title: 'Sunday Worship Service', description: 'Join us for our weekly worship and message.', date: new Date().toISOString(), location: 'Main Sanctuary' },
          { id: 2, title: 'Bible Study', description: 'Deep dive into the Book of Romans.', date: new Date(Date.now() + 86400000).toISOString(), location: 'Room 101' },
          { id: 3, title: 'Community Picnic', description: 'Food, games, and fellowship for the whole family.', date: new Date(Date.now() + 86400000 * 5).toISOString(), location: 'City Park' }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) return <div>Loading events...</div>;

  return (
    <div className="section animate-fade-in">
      <div className="section-header">
        <h2>Upcoming Events</h2>
        <p style={{ color: 'var(--text-muted)' }}>Join us for our upcoming gatherings</p>
      </div>

      <div className="grid">
        {events.map(event => (
          <div key={event.id} className="card">
            <h3 className="card-title">{event.title}</h3>
            <div className="card-meta">
              <span>📅 {new Date(event.date).toLocaleDateString()}</span>
              <span style={{ marginLeft: '1rem' }}>📍 {event.location}</span>
            </div>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
      {/* Pastor's Birthday Section */}
      <div className="card" style={{ marginTop: '3rem', background: 'linear-gradient(to right, rgba(240, 137, 225, 0.2), transparent)' }}>
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>🎉 Pastor's Birthday</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Join us as we celebrate and honor our beloved Pastor's birthday. Here are some wonderful memories from last year!</p>

        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
          {/* USER INSTRUCTION: INSERT LAST YEAR PIC 1 HERE */}
          {/* Replace the src with your image path, e.g., src="/images/pastor-bday-1.jpg" */}
          <div style={{ background: '#e97979ff', height: '250px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#666', border: '2px dashed #bbb' }}>
            <p>Insert Last Year Pic 1 Here</p>
            {/* <img src="YOUR_IMAGE_URL_HERE" alt="Pastor Birthday 1" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} /> */}
          </div>

          {/* USER INSTRUCTION: INSERT LAST YEAR PIC 2 HERE */}
          {/* Replace the src with your image path, e.g., src="/images/pastor-bday-2.jpg" */}
          <div style={{ background: '#6be7c8ff', height: '250px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#666', border: '2px dashed #bbb' }}>
            <p>Insert Last Year Pic 2 Here</p>
            {/* <img src="YOUR_IMAGE_URL_HERE" alt="Pastor Birthday 2" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
