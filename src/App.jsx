import React from 'react';
import Footer from './components/Footer';
import Home from './components/Home';
import Header from './components/Header';
import BathroomCare from './components/BathroomCare';
import Contact from './components/Contact';
import Guide from './components/Guide';
import OurStory from './components/OurStory';
import Shop from './components/Shop';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/bathroom-care" element={<BathroomCare />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
