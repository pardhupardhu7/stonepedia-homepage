import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturedServices from '../components/FeaturedServices';

function Home() {
  return (
    <div className="home-page">
      <HeroSection />
      <FeaturedServices />
    </div>
  );
}

export default Home;
