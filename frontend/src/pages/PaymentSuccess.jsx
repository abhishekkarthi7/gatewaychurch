import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const PaymentSuccess = () => {
  const location = useLocation();
  const paymentDetails = location.state;

  // Destination WhatsApp number
  const CHURCH_WHATSAPP_NUMBER = "919440328071";

  // Build the WhatsApp message template if paymentDetails are present
  let whatsappUrl = "";
  if (paymentDetails) {
    const { paymentId, donorName, phoneNumber, amount, purpose, date } = paymentDetails;
    const message = 
      `*Gateway Church Offering Confirmation* ⛪\n\n` +
      `Hello, I have successfully completed my online giving.\n\n` +
      `*Donor Details:*\n` +
      `• *Name:* ${donorName}\n` +
      `• *Phone:* ${phoneNumber}\n\n` +
      `*Transaction Details:*\n` +
      `• *Amount:* ₹${amount}\n` +
      `• *Purpose:* ${purpose}\n` +
      `• *Payment ID:* \`${paymentId}\`\n` +
      `• *Date:* ${date}\n\n` +
      `Thank you and God Bless! 🙏`;
    
    whatsappUrl = `https://wa.me/${CHURCH_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  }

  if (!paymentDetails) {
    return (
      <div className="section animate-fade-in" style={{ textAlign: 'center', minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <h2>Access Denied</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>No payment receipt found. If you just made a payment, please check your WhatsApp.</p>
        <div>
          <Link to="/" className="btn">Go to Home</Link>
        </div>
      </div>
    );
  }

  const { paymentId, donorName, phoneNumber, amount, purpose, date } = paymentDetails;

  return (
    <div className="section animate-fade-in">
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div className="card" style={{ textAlign: 'center', position: 'relative', overflow: 'visible' }}>
          
          {/* Animated Success Checkmark Ring */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
            <div className="success-checkmark-circle">
              <span className="success-checkmark">✔</span>
            </div>
          </div>

          <h2 className="text-gradient" style={{ marginBottom: '0.5rem', fontWeight: '800' }}>Payment Successful!</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Thank you for your generous contribution to Gateway Church Gummuluru.</p>

          <hr style={{ border: '0', height: '1px', background: 'rgba(255,255,255,0.08)', margin: '1.5rem 0' }} />

          {/* Receipt Info Grid */}
          <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem', fontSize: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--text-muted)' }}>Donor Name:</span>
              <span style={{ fontWeight: '600' }}>{donorName}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--text-muted)' }}>Phone Number:</span>
              <span style={{ fontWeight: '600' }}>{phoneNumber}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--text-muted)' }}>Amount Paid:</span>
              <span style={{ fontWeight: '800', color: 'var(--primary-color)' }}>₹{amount}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--text-muted)' }}>Purpose:</span>
              <span style={{ fontWeight: '600' }}>{purpose}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--text-muted)' }}>Payment ID:</span>
              <span style={{ fontFamily: 'monospace', fontSize: '0.9rem', color: '#cbd5e1', background: 'rgba(255,255,255,0.05)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>{paymentId}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--text-muted)' }}>Date & Time:</span>
              <span style={{ fontSize: '0.95rem' }}>{date}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer" 
              className="btn" 
              style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', fontSize: '1.15rem', textTransform: 'none', background: 'linear-gradient(135deg, #22c55e 0%, #15803d 100%)', boxShadow: '0 10px 25px -5px rgba(34, 197, 94, 0.4)' }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ fill: 'currentColor' }}>
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
              </svg>
              Send Payment Details on WhatsApp
            </a>
            
            <Link to="/" className="btn btn-secondary" style={{ textTransform: 'none', width: '100%', marginLeft: '0' }}>
              Return to Home
            </Link>
          </div>

        </div>
      </div>

      {/* Styled components for checkmark ring */}
      <style>{`
        .success-checkmark-circle {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          border: 4px solid #10b981;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: rgba(16, 185, 129, 0.1);
          animation: scaleIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }

        .success-checkmark {
          color: #10b981;
          font-size: 3rem;
          line-height: 1;
          animation: checkmarkPop 0.6s 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
        }

        @keyframes scaleIn {
          from { transform: scale(0); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        @keyframes checkmarkPop {
          from { transform: scale(0); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default PaymentSuccess;
