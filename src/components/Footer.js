import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <p>&copy; {new Date().getFullYear()} Amir Kouhpainejad</p>
      <div className="footer-links">
        <a href="https://www.linkedin.com/in/amirkouhpainejad/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="https://github.com/amir-kouhpainejad" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="mailto:amir@example.com">Email</a>
      </div>
    </div>
  </footer>
);

export default Footer;
