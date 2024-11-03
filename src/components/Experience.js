import React from 'react';
import '/Users/amir/Desktop/UCSB DOCS/my-portfolio/src/App.css';

const Experience = () => (
  <section className="section experience">
    <h2 className="section-title">Experience</h2>
    <div className="card experience-item">
      <h3>Technical Product Manager Intern - MRSL</h3>
      <p>Led development of a real-time satellite tracker, enhancing user engagement by integrating location data.</p>
      <p>Key Achievements:</p>
      <ul>
        <li>Increased user engagement by 30% through new tracking features.</li>
        <li>Collaborated with cross-functional teams to design UX/UI enhancements.</li>
        <li>Utilized AWS for scalable infrastructure, reducing server costs by 20%.</li>
      </ul>
    </div>
    <div className="card experience-item">
      <h3>Android Backend Developer Intern - Charmlife</h3>
      <p>Optimized backend performance in Java, improving response time with caching.</p>
      <ul>
        <li>Reduced database load by 20% through optimized queries and caching mechanisms.</li>
        <li>Implemented feature updates in collaboration with frontend teams.</li>
      </ul>
    </div>
  </section>
);

export default Experience;
