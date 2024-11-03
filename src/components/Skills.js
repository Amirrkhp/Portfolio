import React from 'react';
import '/Users/amir/Desktop/UCSB DOCS/my-portfolio/src/App.css';

const Skills = () => (
  <section className="section skills">
    <h2 className="section-title">Skills</h2>
    <div className="skills-container">
      <div className="card skill">
        <h3>Languages & Frameworks</h3>
        <p>Python, Java, SQL, C, Go, JavaScript, TypeScript, React, Vue, HTML/CSS, Dart</p>
      </div>
      <div className="card skill">
        <h3>Tools</h3>
        <p>Git, AWS, Linux, Docker, Express, MongoDB, InfluxDB, Heroku, Flutter, Flask, Django</p>
      </div>
      <div className="card skill">
        <h3>Product Management</h3>
        <p>Roadmap Planning, Stakeholder Management, User Research, UX/UI Collaboration</p>
      </div>
    </div>
  </section>
);

export default Skills;
