import React from 'react';
import '../styles/HeroSection.css';

function HeroSection() {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1>Discover the World of Stones</h1>
        <p>Explore, Learn, and Connect with Stone Expertise</p>
        <button className="hero-cta">Explore Now</button>
      </div>
      <div className="hero-background"></div>
    </div>
  );
}

export default HeroSection;
