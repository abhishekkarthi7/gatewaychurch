import React, { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const paymentData = location.state;

  // Active payment tab: 'upi', 'card', 'netbanking'
  const [activeMethod, setActiveMethod] = useState('upi');

  // UPI Transaction ID (UTR) state
  const [upiTxnId, setUpiTxnId] = useState('');

  // Card form states
  const [cardData, setCardData] = useState({
    number: '',
    expiry: '',
    cvv: '',
    name: ''
  });
  
  // Netbanking state
  const [selectedBank, setSelectedBank] = useState('');

  // Form error
  const [formError, setFormError] = useState('');

  // Church UPI Details for dynamic QR code generation
  const CHURCH_UPI_ID = "9440328071@ybl"; 
  const CHURCH_NAME = "Gateway Church";

  if (!paymentData) {
    return (
      <div className="container sbr-page-container animate-fade-in" style={{ textAlign: 'center', minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <h2>No Active Session</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Please enter your contribution details first.</p>
        <div>
          <Link to="/offerings" className="btn">Go to Giving Page</Link>
        </div>
      </div>
    );
  }

  const { donorName, email, phoneNumber, amount, purpose } = paymentData;

  // Dynamic QR Code link builder
  const getDynamicQRUrl = () => {
    const cleanAmount = parseFloat(amount) || 0;
    const cleanName = encodeURIComponent(CHURCH_NAME);
    const cleanUpi = encodeURIComponent(CHURCH_UPI_ID);
    const upiLink = `upi://pay?pa=${cleanUpi}&pn=${cleanName}&am=${cleanAmount}&cu=INR`;
    return `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(upiLink)}`;
  };

  const handleConfirmPayment = (e) => {
    if (e) e.preventDefault();
    setFormError('');

    let finalTxnId = '';
    let methodName = '';

    // Validation based on method
    if (activeMethod === 'upi') {
      const cleanTxnId = upiTxnId.replace(/\s+/g, '');
      if (!cleanTxnId) {
        setFormError('Please enter the 12-digit UPI Transaction ID / Ref No.');
        return;
      }
      if (!/^\d{12}$/.test(cleanTxnId)) {
        setFormError('UPI Transaction ID (UTR) must be exactly 12 digits (e.g. 314892740192).');
        return;
      }
      finalTxnId = cleanTxnId;
      methodName = 'UPI (QR Scanner / GPay)';
    } else if (activeMethod === 'card') {
      if (!cardData.number || !cardData.expiry || !cardData.cvv || !cardData.name) {
        setFormError('Please fill in all credit card details.');
        return;
      }
      if (cardData.number.replace(/\s/g, '').length < 16) {
        setFormError('Card number must be 16 digits.');
        return;
      }
      if (cardData.cvv.length < 3) {
        setFormError('CVV must be 3 digits.');
        return;
      }
      // Generate mock Card transaction reference
      finalTxnId = `CRD-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
      methodName = 'Credit/Debit Card';
    } else if (activeMethod === 'netbanking') {
      if (!selectedBank) {
        setFormError('Please select a bank to proceed.');
        return;
      }
      // Generate mock Netbanking transaction reference
      finalTxnId = `NET-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
      methodName = `Netbanking (${selectedBank})`;
    }

    // Build the WhatsApp message template
    const message = 
      `*Gateway Church Offering Confirmation* ⛪\n\n` +
      `Hello, I have successfully completed my online contribution.\n\n` +
      `*Donor Details:*\n` +
      `• *Name:* ${donorName}\n` +
      `• *Phone:* ${phoneNumber}\n\n` +
      `*Transaction Details:*\n` +
      `• *Amount:* ₹${amount}\n` +
      `• *Purpose:* ${purpose}\n` +
      `• *Method:* ${methodName}\n` +
      `• *Transaction ID / Ref No:* \`${finalTxnId}\`\n` +
      `• *Date:* ${new Date().toLocaleString()}\n\n` +
      `Please verify my contribution. Thank you and God Bless! 🙏`;
    
    const CHURCH_WHATSAPP_NUMBER = "919440328071";
    const whatsappUrl = `https://wa.me/${CHURCH_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    // Redirect directly to WhatsApp
    window.location.href = whatsappUrl;
  };

  // Formatters
  const handleUpiTxnIdChange = (e) => {
    // Only allow digits, max 12 characters
    const value = e.target.value.replace(/\D/g, '').substr(0, 12);
    setUpiTxnId(value);
  };

  const handleCardNumberChange = (e) => {
    let value = e.target.value.replace(/\D/g, '').substr(0, 16);
    const formatted = value.match(/.{1,4}/g)?.join(' ') || value;
    setCardData({ ...cardData, number: formatted });
  };

  const handleExpiryChange = (e) => {
    let value = e.target.value.replace(/\D/g, '').substr(0, 4);
    if (value.length > 2) {
      value = value.substring(0, 2) + ' / ' + value.substring(2);
    }
    setCardData({ ...cardData, expiry: value });
  };

  const handleCvvChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').substr(0, 3);
    setCardData({ ...cardData, cvv: value });
  };

  return (
    <div className="container sbr-page-container animate-fade-in">
      <div className="checkout-container">
        
        {/* Left blue panel: Price Summary */}
        <div className="checkout-left-panel">
          <div className="checkout-brand">
            <img src="/LOGO.jpeg" alt="Gateway Church Logo" className="checkout-brand-img" />
            <span className="checkout-brand-name">Gateway Church</span>
          </div>

          <div>
            <div className="checkout-price-card">
              <span className="checkout-price-label">Price Summary</span>
              <div className="checkout-price-val">₹{parseFloat(amount).toFixed(2)}</div>
            </div>

            <div className="checkout-user-card">
              <span>Using as +91 {phoneNumber}</span>
            </div>
          </div>

          <div className="checkout-secured-badge">
            🛡️ Secured by Razorpay
          </div>
        </div>

        {/* Right panel: Payment Options */}
        <div className="checkout-right-panel">
          <div className="checkout-header">
            <h3>Payment Options</h3>
            <span style={{ fontSize: '0.8rem', color: '#64748b' }}>💰 INR</span>
          </div>

          <div className="checkout-options-content">
            
            {/* Options Tabs List */}
            <div className="checkout-mock-methods" style={{ margin: '0 0 1rem' }}>
              
              {/* UPI Tab */}
              <div 
                className={`checkout-method-row ${activeMethod === 'upi' ? 'active' : ''}`}
                onClick={() => { setActiveMethod('upi'); setFormError(''); }}
              >
                <div className="checkout-method-info">
                  <span className="checkout-method-icon">📱</span>
                  <span className="checkout-method-name">UPI / QR Scanner</span>
                </div>
                <span className="checkout-method-logo">GPay, PhonePe, Paytm</span>
              </div>

              {/* Card Tab */}
              <div 
                className={`checkout-method-row ${activeMethod === 'card' ? 'active' : ''}`}
                onClick={() => { setActiveMethod('card'); setFormError(''); }}
              >
                <div className="checkout-method-info">
                  <span className="checkout-method-icon">💳</span>
                  <span className="checkout-method-name">Cards (Credit/Debit)</span>
                </div>
                <span className="checkout-method-logo">Visa, MasterCard, RuPay</span>
              </div>

              {/* Netbanking Tab */}
              <div 
                className={`checkout-method-row ${activeMethod === 'netbanking' ? 'active' : ''}`}
                onClick={() => { setActiveMethod('netbanking'); setFormError(''); }}
              >
                <div className="checkout-method-info">
                  <span className="checkout-method-icon">🏦</span>
                  <span className="checkout-method-name">Netbanking</span>
                </div>
                <span className="checkout-method-logo">SBI, HDFC, ICICI, Axis</span>
              </div>

            </div>

            {/* Error Message */}
            {formError && (
              <div style={{ padding: '0.6rem 0.8rem', backgroundColor: '#fef2f2', color: '#b91c1c', borderRadius: '6px', fontSize: '0.82rem', marginBottom: '1rem', fontWeight: '600' }}>
                ⚠️ {formError}
              </div>
            )}

            {/* Content Area Based on Selection */}
            
            {/* UPI Option */}
            {activeMethod === 'upi' && (
              <form onSubmit={handleConfirmPayment} className="checkout-form-container">
                <div className="checkout-qr-section">
                  <img 
                    src={getDynamicQRUrl()} 
                    alt="Dynamic UPI QR Code Scanner" 
                    className="checkout-qr-img" 
                  />
                  <span className="checkout-qr-text">Scan this QR code using GPay, PhonePe, or Paytm</span>
                  <span style={{ fontSize: '0.75rem', background: '#d1fae5', color: '#065f46', padding: '0.2rem 0.6rem', borderRadius: '4px', marginTop: '0.5rem', fontWeight: 'bold' }}>
                    Prefilled Amount: ₹{amount}
                  </span>
                </div>

                <div className="checkout-number-section">
                  <span className="checkout-number-label">Or GPay / PhonePe directly to:</span>
                  <div className="checkout-number-val">+91 94403 28071</div>
                  <span style={{ fontSize: '0.75rem', color: '#64748b' }}>Name - Gateway Church</span>
                </div>

                {/* Mandating 12-digit UPI Transaction Ref ID */}
                <div style={{ marginTop: '1.2rem', textAlign: 'left' }}>
                  <label style={{ fontSize: '0.75rem', fontWeight: 'bold', color: '#475569', textTransform: 'uppercase' }}>
                    UPI Transaction ID / Ref No (12 digits) <span style={{ color: '#b91c1c' }}>*</span>
                  </label>
                  <input 
                    type="text" 
                    className="checkout-input-field" 
                    placeholder="Enter 12-digit UTR from your receipt"
                    value={upiTxnId}
                    onChange={handleUpiTxnIdChange}
                    required
                  />
                  <span style={{ fontSize: '0.7rem', color: '#64748b', display: 'block', marginTop: '0.2rem' }}>
                    Copy the 12-digit Ref No. or UTR number from your GPay / PhonePe payment receipt.
                  </span>
                </div>

                <button 
                  type="submit"
                  className="payment-blue-btn" 
                  style={{ width: '100%', marginTop: '1.2rem', background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', boxShadow: '0 4px 12px rgba(16, 185, 129, 0.2)' }}
                >
                  Send Details to WhatsApp
                </button>
              </form>
            )}

            {/* Card Option Form */}
            {activeMethod === 'card' && (
              <form onSubmit={handleConfirmPayment} className="checkout-form-container" style={{ textAlign: 'left' }}>
                <div style={{ marginBottom: '0.8rem' }}>
                  <label style={{ fontSize: '0.75rem', fontWeight: 'bold', color: '#475569', textTransform: 'uppercase' }}>Card Number</label>
                  <input 
                    type="text" 
                    className="checkout-input-field" 
                    placeholder="4111 2222 3333 4444"
                    value={cardData.number}
                    onChange={handleCardNumberChange}
                    required
                  />
                </div>

                <div style={{ display: 'flex', gap: '1rem', marginBottom: '0.8rem' }}>
                  <div style={{ flex: 1 }}>
                    <label style={{ fontSize: '0.75rem', fontWeight: 'bold', color: '#475569', textTransform: 'uppercase' }}>Expiry Date</label>
                    <input 
                      type="text" 
                      className="checkout-input-field" 
                      placeholder="MM / YY"
                      value={cardData.expiry}
                      onChange={handleExpiryChange}
                      required
                    />
                  </div>
                  <div style={{ flex: 1 }}>
                    <label style={{ fontSize: '0.75rem', fontWeight: 'bold', color: '#475569', textTransform: 'uppercase' }}>CVV</label>
                    <input 
                      type="password" 
                      className="checkout-input-field" 
                      placeholder="•••"
                      maxLength="3"
                      value={cardData.cvv}
                      onChange={handleCvvChange}
                      required
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '1.2rem' }}>
                  <label style={{ fontSize: '0.75rem', fontWeight: 'bold', color: '#475569', textTransform: 'uppercase' }}>Cardholder Name</label>
                  <input 
                    type="text" 
                    className="checkout-input-field" 
                    placeholder="John Doe"
                    value={cardData.name}
                    onChange={(e) => setCardData({ ...cardData, name: e.target.value })}
                    required
                  />
                </div>

                <button 
                  type="submit"
                  className="payment-blue-btn" 
                  style={{ width: '100%', background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)', boxShadow: '0 4px 12px rgba(37, 99, 235, 0.2)' }}
                >
                  Confirm Card Payment & Send to WhatsApp
                </button>
              </form>
            )}

            {/* Netbanking Option */}
            {activeMethod === 'netbanking' && (
              <form onSubmit={handleConfirmPayment} className="checkout-form-container" style={{ textAlign: 'left' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 'bold', color: '#475569', textTransform: 'uppercase', marginBottom: '0.5rem', display: 'block' }}>Popular Banks</span>
                
                <div className="checkout-bank-grid">
                  <div 
                    type="button"
                    className={`checkout-bank-item ${selectedBank === 'SBI' ? 'active' : ''}`}
                    onClick={() => setSelectedBank('SBI')}
                  >
                    <span className="checkout-bank-logo">🏛️</span> State Bank of India
                  </div>
                  <div 
                    type="button"
                    className={`checkout-bank-item ${selectedBank === 'HDFC' ? 'active' : ''}`}
                    onClick={() => setSelectedBank('HDFC')}
                  >
                    <span className="checkout-bank-logo">🏛️</span> HDFC Bank
                  </div>
                  <div 
                    type="button"
                    className={`checkout-bank-item ${selectedBank === 'ICICI' ? 'active' : ''}`}
                    onClick={() => setSelectedBank('ICICI')}
                  >
                    <span className="checkout-bank-logo">🏛️</span> ICICI Bank
                  </div>
                  <div 
                    type="button"
                    className={`checkout-bank-item ${selectedBank === 'AXIS' ? 'active' : ''}`}
                    onClick={() => setSelectedBank('AXIS')}
                  >
                    <span className="checkout-bank-logo">🏛️</span> Axis Bank
                  </div>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ fontSize: '0.75rem', fontWeight: 'bold', color: '#475569', textTransform: 'uppercase' }}>Or Select Other Bank</label>
                  <select 
                    className="checkout-input-field" 
                    value={selectedBank}
                    onChange={(e) => setSelectedBank(e.target.value)}
                    style={{ height: '2.8rem' }}
                  >
                    <option value="">-- Choose Your Bank --</option>
                    <option value="BOB">Bank of Baroda</option>
                    <option value="PNB">Punjab National Bank</option>
                    <option value="CAN">Canara Bank</option>
                    <option value="UNION">Union Bank of India</option>
                    <option value="IND">Indian Bank</option>
                    <option value="YES">Yes Bank</option>
                  </select>
                </div>

                <button 
                  type="submit"
                  className="payment-blue-btn" 
                  style={{ width: '100%', background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)', boxShadow: '0 4px 12px rgba(37, 99, 235, 0.2)' }}
                >
                  Confirm Bank Payment & Send to WhatsApp
                </button>
              </form>
            )}

          </div>
        </div>

      </div>
    </div>
  );
};

export default Checkout;
