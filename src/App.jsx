import React from 'react';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import Projects from './components/Projects';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Navbar from './components/Navbar'; // We'll add this for navigation
import FAQ from './components/Faq';

function App() {
  return (
    <div className="App">
      <Navbar /> {/* Navigation bar */}
      <main>
        <HeroSection />
        <AboutUs />
        <Projects />
        {/* <HowItWorks /> */}
        <Testimonials />
        <FAQ />
        <ContactUs />
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;