import React from "react";
import { Link } from "react-router-dom";
import "./heroSection.css";
const HeroSection = () => {
  return (
    <div className="hero-section">
      <video autoPlay loop muted className="hero-video">
        <source src="/videos/heroVideo.mp4" type="video/mp4" />
        Your browser does not support video playback.
      </video>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h2>Innovative Learning Solutions to Empower Your Workforce</h2>
        <p>
          Discover bespoke eLearning, microlearning, and interactive solutions
          tailored to your organisation's needs
        </p>
        <Link to="/contact">
          <button className="cta-button">Get a Free Consultation</button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
