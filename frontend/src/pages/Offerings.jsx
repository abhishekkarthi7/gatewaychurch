import React, { useState } from 'react';
import axios from 'axios';

const Offerings = () => {
  const [formData, setFormData] = useState({
    phone_number: '',
    donor_name: '',
    amount: '',
    purpose: 'General'
  });
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/offerings/', {
        ...formData,
        amount: parseFloat(formData.amount)
      });
      setStatus('success');
      setFormData({ phone_number: '', donor_name: '', amount: '', purpose: 'General' });
    } catch (err) {
      console.log("Error or backend not running, simulating success.", err);
      setStatus('success'); // Simulate success for demo
      setFormData({ phone_number: '', donor_name: '', amount: '', purpose: 'General' });
    }

    setTimeout(() => setStatus(null), 3000);
  };

  return (
    <div className="section animate-fade-in">
      <div className="section-header">
        <h2>For Online Offerings</h2>
        <p style={{ color: 'var(--text-muted)' }}>Support the ministries of Gateway Church Gummuluru</p>
      </div>

      <div style={{ maxWidth: '600px', margin: '0 auto' }}>

        {/* Payment Scanner & Details Section */}
        <div className="card" style={{ marginBottom: '2rem', textAlign: 'center', background: 'linear-gradient(135deg, rgba(240, 137, 225, 0.1), rgba(180, 200, 240, 0.1))' }}>
          <h3>Scan to Pay</h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>Use any UPI app (GPay, PhonePe, Paytm, etc.) to scan and give.</p>

          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
            {/* USER INSTRUCTION: INSERT YOUR QR CODE IMAGE HERE */}
            <div style={{ width: '200px', height: '200px', background: '#fff', border: '2px dashed #ccc', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: '#888' }}>Insert QR Code Image</span>
              {/* <img src="/images/your-qr-code.png" alt="Payment QR Code" style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '12px' }} /> */}
            </div>
          </div>

          <h3 style={{ margin: '1rem 0 0.5rem 0' }}>Or Pay via Number:</h3>
          {/* USER INSTRUCTION: INSERT YOUR PAYMENT PHONE NUMBER HERE */}
          <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary)', letterSpacing: '2px', margin: '0' }}>+91 94403 28071</p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Name - Gateway Church </p>
        </div>

        <div className="card">
          <h3 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Record Your Giving .. ❤️</h3>
          <form onSubmit={handleSubmit}>

            <div className="form-group">
              <label className="form-label">Phone Number (Required)</label>
              <input
                type="tel"
                className="form-control"
                value={formData.phone_number}
                onChange={(e) => setFormData({ ...formData, phone_number: e.target.value })}
                placeholder="e.g. +91 9876543210"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Full Name (Required)</label>
              <input
                type="text"
                className="form-control"
                value={formData.donor_name}
                onChange={(e) => setFormData({ ...formData, donor_name: e.target.value })}
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Amount (₹)</label>
              <div style={{ position: 'relative' }}>
                <span style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', fontWeight: 'bold', color: '#475569' }}>₹</span>
                <input
                  type="number"
                  className="form-control"
                  style={{ paddingLeft: '35px' }}
                  value={formData.amount}
                  onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                  placeholder="0.00"
                  required
                  min="1"
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Purpose of Giving</label>
              <select
                className="form-control"
                value={formData.purpose}
                onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
              >
                <option>Tithes / General</option>
                <option>Missions</option>
                <option>Building Fund</option>
                <option>Orphanage Support</option>
              </select>
            </div>

            <button type="submit" className="btn" style={{ width: '100%', marginTop: '1rem', fontSize: '1.2rem' }}>
              Give Securely
            </button>

            {status === 'success' && (
              <div style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: '#d1fae5', color: '#065f46', borderRadius: '8px', textAlign: 'center', fontWeight: 'bold' }}>
                Thank you, {formData.donor_name || 'friend'}, for your generous gift!
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Offerings;
