import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Offerings = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    phone_number: '',
    donor_name: '',
    amount: '',
    purpose: 'Tithes / General'
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    if (!window.Razorpay) {
      setError("Payment system failed to load. Please check your internet connection.");
      setLoading(false);
      return;
    }

    // Razorpay standard checkout configuration
    // Note: The user should replace the key below with their live or test Key ID from the Razorpay Dashboard.
    const options = {
      key: "rzp_test_5q1Lz7vWwX9zK6", // Placeholder Test Key ID
      amount: parseFloat(formData.amount) * 100, // Amount in paise (1 INR = 100 paise)
      currency: "INR",
      name: "Gateway Church",
      description: `Offerings - ${formData.purpose}`,
      image: "/LOGO.jpeg",
      prefill: {
        name: formData.donor_name,
        contact: formData.phone_number
      },
      handler: function (response) {
        setLoading(false);
        // Successful payment redirect to success page
        navigate('/payment-success', {
          state: {
            paymentId: response.razorpay_payment_id,
            donorName: formData.donor_name,
            phoneNumber: formData.phone_number,
            amount: formData.amount,
            purpose: formData.purpose,
            date: new Date().toLocaleString()
          }
        });
      },
      modal: {
        ondismiss: function () {
          setLoading(false);
        }
      },
      theme: {
        color: "#7c3aed" // Matches the new purple theme accent
      }
    };

    try {
      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error("Razorpay initiation error:", err);
      setError("Could not initiate payment. Please verify your details.");
      setLoading(false);
    }
  };

  return (
    <div className="section animate-fade-in">
      <div className="section-header">
        <h2>For Online Offerings</h2>
        <p style={{ color: 'var(--text-muted)' }}>Support the ministries of Gateway Church Gummuluru</p>
      </div>

      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        
        {/* Info card describing the checkout process */}
        <div className="card" style={{ marginBottom: '2rem', textAlign: 'center', background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.1), rgba(59, 130, 246, 0.1))' }}>
          <span style={{ fontSize: '2.5rem', marginBottom: '0.5rem', display: 'inline-block' }}>💳</span>
          <h3 style={{ margin: '0.5rem 0' }}>Secure Digital Giving</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
            Enter your details and giving amount below. Once you click <strong>Give Securely</strong>, the Razorpay window will open where you can pay using any UPI App (GPay, PhonePe, Paytm, etc.) via QR Code scanning, Cards, or Netbanking.
          </p>
        </div>

        <div className="card">
          <h3 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Record Your Giving .. ❤️</h3>
          
          {error && (
            <div style={{ marginBottom: '1.5rem', padding: '1rem', backgroundColor: '#fef2f2', color: '#991b1b', borderRadius: '12px', fontSize: '0.95rem', fontWeight: '500', textAlign: 'center' }}>
              ⚠️ {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Full Name (Required)</label>
              <input
                type="text"
                className="form-control"
                value={formData.donor_name}
                onChange={(e) => setFormData({ ...formData, donor_name: e.target.value })}
                placeholder="Enter your name"
                required
                disabled={loading}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Phone Number (Required)</label>
              <input
                type="tel"
                className="form-control"
                value={formData.phone_number}
                onChange={(e) => setFormData({ ...formData, phone_number: e.target.value })}
                placeholder="e.g. +91 9876543210"
                required
                disabled={loading}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Amount (₹)</label>
              <div style={{ position: 'relative' }}>
                <span style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', fontWeight: 'bold', color: 'var(--text-muted)' }}>₹</span>
                <input
                  type="number"
                  className="form-control"
                  style={{ paddingLeft: '35px' }}
                  value={formData.amount}
                  onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                  placeholder="0.00"
                  required
                  min="1"
                  disabled={loading}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Purpose of Giving</label>
              <select
                className="form-control"
                value={formData.purpose}
                onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                disabled={loading}
              >
                <option>Tithes / General</option>
                <option>Missions</option>
                <option>Building Fund</option>
                <option>Orphanage Support</option>
              </select>
            </div>

            <button 
              type="submit" 
              className="btn" 
              style={{ width: '100%', marginTop: '1rem', fontSize: '1.2rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="spinner" style={{ width: '20px', height: '20px', border: '3px solid rgba(255,255,255,0.3)', borderTopColor: '#fff', borderRadius: '50%', display: 'inline-block', animation: 'spin 1s linear infinite' }}></span>
                  Loading Checkout...
                </>
              ) : (
                "Give Securely"
              )}
            </button>
          </form>
        </div>
      </div>
      
      {/* Dynamic inline keyframe style for loader spin */}
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Offerings;
