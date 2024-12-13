import React from 'react';
import '../styles/Services.css';

function Services() {
  const serviceDetails = [
    {
      title: "Stone Database",
      description: "Comprehensive digital archive of stone and mineral information.",
      features: [
        "Detailed stone profiles",
        "High-resolution images",
        "Scientific classifications"
      ]
    },
    {
      title: "Expert Consultation",
      description: "Connect with professional geologists and stone experts.",
      features: [
        "One-on-one consultations",
        "Research support",
        "Industry insights"
      ]
    },
    {
      title: "Community Platform",
      description: "Join a global network of stone enthusiasts and professionals.",
      features: [
        "Discussion forums",
        "Knowledge sharing",
        "Collaborative research"
      ]
    }
  ];

  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <div className="services-grid">
        {serviceDetails.map((service, index) => (
          <div key={index} className="service-detail-card">
            <h2>{service.title}</h2>
            <p className="service-description">{service.description}</p>
            <div className="service-features">
              <h3>Features:</h3>
              <ul>
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
