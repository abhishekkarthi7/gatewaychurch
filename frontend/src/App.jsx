import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Events from './pages/Events';
import Offerings from './pages/Offerings';
import About from './pages/About';
import MinistryDetails from './pages/MinistryDetails';
import PaymentSuccess from './pages/PaymentSuccess';
import Checkout from './pages/Checkout';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/offerings" element={<Offerings />} />
          <Route path="/about" element={<About />} />
          <Route path="/ministries/:id" element={<MinistryDetails />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
