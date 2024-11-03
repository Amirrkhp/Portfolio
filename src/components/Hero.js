import React from 'react';
import '/Users/amir/Desktop/UCSB DOCS/my-portfolio/src/App.css';
import heroImage from '/Users/amir/Desktop/UCSB DOCS/my-portfolio/src/assets/K_Amir-6.jpg';

/*************  ✨ Codeium Command ⭐  *************/
/**
 * Hero component renders the hero section with a background image.
 * It includes an overlay for text contrast, displays the user's name,
 * a brief description, and a contact button.
 */
/******  35862b27-42db-45ef-a1bd-b80e7ba69d90  *******/
const Hero = () => (
  <section className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
    <div className="overlay"></div>
    <div className="content">
      <h1>Amir Kouhpainejad</h1>
      <p>Technical Product Manager | Crafting Innovative Solutions with a Focus on Impact</p>
      <button>Contact Me</button>
    </div>
  </section>
);

export default Hero;
