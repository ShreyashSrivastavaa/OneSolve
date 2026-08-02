import React, { useState } from 'react';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import ThreePlayground from './components/ThreePlayground';
import Portfolio from './components/Portfolio';
import WorkflowProcess from './components/WorkflowProcess';
import Testimonials from './components/Testimonials';
import CTASection from './components/CTASection';
import ContactSection from './components/ContactSection';
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
        <ThreePlayground />
        <Portfolio />
        <WorkflowProcess />
        <Testimonials />
        <CTASection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
