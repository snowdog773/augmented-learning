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
      Exciting Changes Are on the Way! We're rebuilding our website to provide
      an enhanced experience for our clients and learners. As a learning
      provider, we're committed to delivering innovative and engaging solutions
      - and our new website will reflect just that! We're relaunching on 19
      February 2025! In the meantime, we're here to help. For inquiries or to
      learn more about our services, please contact us at
      gareth@learningaugment.com or +61448787074 Thank you for your patience -
      we can't wait to welcome you back to our refreshed website soon!
    </div>
  );
};

export default HeroSection;
