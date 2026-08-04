import React, { useState, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import ProblemSolution from './components/ProblemSolution';
import ScrollingBanner from './components/ScrollingBanner';
import MadeFor from './components/MadeFor';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import CTASection from './components/CTASection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen';

export default function App() {
  const [splashDone, setSplashDone] = useState(false);
  const handleSplashFinished = useCallback(() => setSplashDone(true), []);

  return (
    <div style={{ position: 'relative', overflowX: 'hidden', background: 'var(--bg-primary)' }}>
      {/* Intro splash screen */}
      {!splashDone && <SplashScreen onFinished={handleSplashFinished} />}
      {/* Fixed Header Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* 1. Hero — full-screen glow orb + centered CTA */}
        <Hero />

        {/* 2. Social Proof — client logo marquee */}
        <SocialProof />

        {/* 3. Problem / Solution — alternating tinted cards */}
        <ProblemSolution />

        {/* 4. Scrolling banner — giant text ticker */}
        <ScrollingBanner />

        {/* 5. Made For — cycling heading */}
        <MadeFor />

        {/* 6. Services — bento grid with hover-reveal */}
        <Services />

        {/* 7. Testimonials — infinite horizontal marquee */}
        <Testimonials />

        {/* 8. CTA Section */}
        <CTASection />

        {/* 9. Contact Form */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
