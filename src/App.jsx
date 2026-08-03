import React, { useState } from 'react';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import InteractiveDemos from './components/InteractiveDemos';
import Portfolio from './components/Portfolio';
import TechArsenal from './components/TechArsenal';
import WorkflowProcess from './components/WorkflowProcess';
import Capabilities from './components/Capabilities';
import Testimonials from './components/Testimonials';
import CTASection from './components/CTASection';
import ContactSection from './components/ContactSection';
import StickyCTA from './components/StickyCTA';
import Footer from './components/Footer';

export default function App() {
  const [cursorEnabled, setCursorEnabled] = useState(true);

  return (
    <div style={{ position: 'relative', overflowX: 'hidden' }}>
      {/* Custom Trailing Magnetic Cursor */}
      <CustomCursor enabled={cursorEnabled} />

      {/* Fixed Header Navigation Bar */}
      <Navbar cursorEnabled={cursorEnabled} setCursorEnabled={setCursorEnabled} />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <AboutUs />
        <Services />
        <InteractiveDemos />
        <Portfolio />
        <TechArsenal />
        <WorkflowProcess />
        <Capabilities />
        <Testimonials />
        <CTASection />
        <ContactSection />
      </main>

      {/* Persistent Floating Bottom Consultation CTA */}
      <StickyCTA />

      {/* Footer */}
      <Footer />
    </div>
  );
}
