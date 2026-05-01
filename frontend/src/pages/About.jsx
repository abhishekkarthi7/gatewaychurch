import React from 'react';

const About = () => {
  return (
    <div className="animate-fade-in" style={{ paddingBottom: '4rem' }}>
      <section className="hero" style={{ padding: '4rem 1.5rem' }}>
        <h1>Our <span className="text-gradient">Story</span></h1>
        <p>Discover who we are, what we believe, and how God is moving at Gateway Church.</p>
      </section>

      {/* Pastor & Wife Details Card */}
      <div className="card" style={{ marginBottom: '3rem', background: 'linear-gradient(to right, rgba(180, 200, 240, 0.1), transparent)' }}>
        <h2 className="text-gradient" style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Meet Our Pastors</h2>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center' }}>

          <div style={{ flex: '1 1 100%', minWidth: '280px', display: 'flex', justifyContent: 'center' }}>
            {/* USER INSTRUCTION: INSERT PASTOR & WIFE IMAGE HERE */}
            {/* Replace the src below with your actual image path */}
            <div style={{ width: '100%', maxWidth: '350px', height: '300px', background: '#ddd', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none', color: '#666', textAlign: 'center' }}>
              <img src="/SnapsByRajsh-10.jpg" alt="Lead Pastors" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} />
            </div>
          </div>

          <div style={{ flex: '1 1 100%', minWidth: '280px' }}>
            {/* USER INSTRUCTION: INSERT PASTOR & WIFE DETAILS HERE */}
            <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>Rev V.S.C Prasad & Sunitha</h3>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
              A pastor and his wife are pillars of faith in the church , guiding the congregation with love , wisdom , and strong belief in God 🙏
              Through their dedication , they inspire people to grow spiritually and trust in God’s plan
            </p>
          </div>

        </div>
      </div>

      <div className="card" style={{ marginBottom: '3rem' }}>
        <h2 className="text-gradient" style={{ marginBottom: '1.5rem' }}>What We Believe</h2>
        <div className="grid" style={{ gridTemplateColumns: '1fr', gap: '1.5rem' }}>
          <div>
            <h3 style={{ color: 'var(--primary-color)' }}>The Bible</h3>
            <p style={{ color: 'var(--text-muted)' }}>We believe the entire Bible is the inspired Word of God and that men were moved by the Spirit of God to write the very words of Scripture. Therefore, we believe the Bible is without error.</p>
          </div>
          <div>
            <h3 style={{ color: 'var(--primary-color)' }}>God</h3>
            <p style={{ color: 'var(--text-muted)' }}>We believe in one God who exists in three distinct persons: Father, Son, and Holy Spirit. We believe that Jesus Christ is the second member of the Trinity (the Son of God) who became flesh to reveal God to humanity.</p>
          </div>
          <div>
            <h3 style={{ color: 'var(--primary-color)' }}>Salvation</h3>
            <p style={{ color: 'var(--text-muted)' }}>We believe that the blood of Jesus Christ, shed on the cross, provides the sole basis for the forgiveness of sin. Therefore, God freely offers salvation to those who place their faith in the death and resurrection of Christ.</p>
          </div>
        </div>
      </div>

      <div className="grid">
        <div className="card">
          <span className="card-icon">📍</span>
          <h3 className="card-title">Location</h3>
          <p style={{ color: 'var(--text-muted)' }}>
            Gummuluru<br />
            Korukonda, Andhra pradesh - 533292<br />
            Plenty of parking available in the rear lot.
          </p>
        </div>

        <div className="card">
          <span className="card-icon">📞</span>
          <h3 className="card-title">Contact</h3>
          <p style={{ color: 'var(--text-muted)' }}>
            Phone - +91 9966178555<br />
            Email - gatewaychurch@gmail.com<br />
          </p>
        </div>
      </div>

      {/* Prayer Request Section */}
      <a
        href="https://wa.me/916305217678"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: 'none', display: 'block', marginTop: '3rem' }}
      >
        <div className="card" style={{ textAlign: 'center', background: 'linear-gradient(to right, rgba(236, 72, 153, 0.1), rgba(99, 102, 241, 0.1))' }}>
          <span className="card-icon" style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>🙏</span>
          <h2 className="text-gradient" style={{ marginBottom: '1rem' }}>Submit a Prayer Request</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
            We believe in the power of prayer. Click this card to send us your prayer requests directly via WhatsApp, and our team will pray for you.
          </p>
        </div>
      </a>
    </div>
  );
};

export default About;
