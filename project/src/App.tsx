import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Events from './components/Events';
import Gallery from './components/Gallery';
import Location from './components/Location';
import Stats from './components/Stats';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Events />
      <Gallery />
      <Location />
      {/* <Stats /> */}
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;