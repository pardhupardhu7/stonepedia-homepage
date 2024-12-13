import React from 'react';
import '../styles/FeaturedServices.css';

function FeaturedServices() {
  const services = [
    {
      title: "Stone Database",
      description: "Comprehensive collection of stone information and resources.",
      icon: "📚"
    },
    {
      title: "Expert Knowledge",
      description: "Learn from industry experts and professional geologists.",
      icon: "🔬"
    },
    {
      title: "Global Community",
      description: "Connect with stone enthusiasts worldwide.",
      icon: "🌍"
    }
  ];

  return (
    <section className="featured-services">
      <div className="services-container">
        <h2>Our Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedServices;
