import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx'; 
import Footer from './components/Footer.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
// Naya component import karein
import Home from './pages/Home.jsx';
import AboutUs from './pages/AboutUs.jsx';
import Contact from './pages/Contact.jsx';
import OurWork from './pages/Work.jsx';
import Services from './pages/Services.jsx';
import ServiceDetail from './pages/ServiceDetail.jsx';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        
        {/* Naya premium navbar component layout flow */}
        <Navbar />
        <ScrollToTop /> {/* Ye component har route change par screen ko top par le jayega */}

        {/* Content Routes Panel */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/our-work" element={<OurWork />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
        </Routes>

        {/* Fixed Footer bottom layout */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;