import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About Stonepedia</h1>
        <div className="about-sections">
          <div className="about-section">
            <h2>Our Mission</h2>
            <p>
              Stonepedia is dedicated to providing comprehensive knowledge 
              about stones, minerals, and geological wonders. We aim to 
              connect enthusiasts, researchers, and professionals in the 
              world of stones.
            </p>
          </div>
          
          <div className="about-section">
            <h2>Who We Are</h2>
            <p>
              Founded by a team of geologists and stone enthusiasts, 
              Stonepedia began as a passion project to share knowledge 
              and create a global community of stone lovers.
            </p>
          </div>
        </div>

        <div className="team-section">
          <h2>Our Team</h2>
          <div className="team-grid">
            {[
              { name: "John Doe", role: "Chief Geologist" },
              { name: "Jane Smith", role: "Research Director" },
              { name: "Mike Johnson", role: "Community Manager" }
            ].map((member, index) => (
              <div key={index} className="team-member">
                <div className="team-member-avatar">
                  {member.name.charAt(0)}
                </div>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
