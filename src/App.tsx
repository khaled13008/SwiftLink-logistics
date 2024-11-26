import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import TrackingSection from './components/TrackingSection';
import PartnerPortal from './components/PartnerPortal';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Careers from './components/Careers';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <Services />
      <TrackingSection />
      <PartnerPortal />
      <Testimonials />
      <FAQ />
      <Careers />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;