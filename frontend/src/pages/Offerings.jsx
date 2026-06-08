import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Offerings = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    phone_number: '',
    donor_name: '',
    email: '',
    amount: '299',
    purpose: 'Tithes / General'
  });
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

    // Validation
    if (!formData.donor_name || !formData.phone_number || !formData.amount) {
      setError("Please fill out all required fields.");
      return;
    }

    const cleanPhone = formData.phone_number.replace(/\s+/g, '').replace(/[^\d+]/g, '');

    // Forward form data to Step 2 (/checkout)
    navigate('/checkout', {
      state: {
        donorName: formData.donor_name,
        email: formData.email,
        phoneNumber: cleanPhone,
        amount: formData.amount,
        purpose: formData.purpose
      }
    });
  };

  return (
    <div className="container sbr-page-container animate-fade-in">
      <div className="section-header" style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '3rem', color: '#ffffff' }}>For Online Offerings</h2>
        <p style={{ color: 'var(--text-muted)' }}>Support the ministries of Gateway Church Gummuluru</p>
      </div>

      <div style={{ maxWidth: '550px', margin: '0 auto' }}>
        <div className="payment-card-white">
          <h3 className="payment-card-title">Payment Details</h3>
          <div className="payment-title-underline"></div>

          {error && (
            <div style={{ marginBottom: '1.5rem', padding: '0.8rem', backgroundColor: '#fef2f2', color: '#b91c1c', borderRadius: '6px', fontSize: '0.9rem', fontWeight: '500' }}>
              ⚠️ {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="payment-form-group">
              <label className="payment-form-label">Amount <span>*</span></label>
              <div className="payment-input-wrapper">
                <span className="payment-input-prefix">₹</span>
                <input
                  type="number"
                  className="payment-control-white"
                  style={{ paddingLeft: '30px' }}
                  value={formData.amount}
                  onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                  required
                  min="1"
                />
              </div>
            </div>

            <div className="payment-form-group">
              <label className="payment-form-label">Name <span>*</span></label>
              <input
                type="text"
                className="payment-control-white"
                value={formData.donor_name}
                onChange={(e) => setFormData({ ...formData, donor_name: e.target.value })}
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="payment-form-group">
              <label className="payment-form-label">Email</label>
              <input
                type="email"
                className="payment-control-white"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Enter your email (optional)"
              />
            </div>

            <div className="payment-form-group">
              <label className="payment-form-label">Phone <span>*</span></label>
              <div className="payment-input-wrapper">
                <select className="payment-control-white payment-phone-select" disabled>
                  <option>IN +91</option>
                </select>
                <input
                  type="tel"
                  className="payment-control-white payment-phone-input"
                  value={formData.phone_number}
                  onChange={(e) => setFormData({ ...formData, phone_number: e.target.value })}
                  placeholder="9966178778"
                  required
                />
              </div>
            </div>

            <div className="payment-form-group">
              <label className="payment-form-label">Purpose of Giving</label>
              <select
                className="payment-control-white"
                value={formData.purpose}
                onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
              >
                <option>Tithes / General</option>
                <option>Missions</option>
                <option>Building Fund</option>
                <option>Orphanage Support</option>
              </select>
            </div>

            <button 
              type="submit" 
              className="payment-blue-btn" 
              style={{ width: '100%', marginTop: '1.5rem', fontSize: '1.1rem' }}
            >
              Contribute ₹ {parseFloat(formData.amount || 0).toFixed(2)}
            </button>

            <div className="payment-footer-logos">
              <span style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: '600' }}>Secured by Razorpay</span>
              <div className="payment-logo-row">
                <span style={{ fontSize: '0.75rem', fontWeight: 'bold', color: '#64748b' }}>UPI | VISA | Mastercard | RuPay</span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Offerings;
