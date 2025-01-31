import React from "react";
import { Link } from "react-router-dom";
import "./heroSection.css";
const TempHeroSection = () => {
  return (
    <div className="hero-section">
      <video autoPlay loop muted className="hero-video">
        <source src="/videos/heroVideo.mp4" type="video/mp4" />
        Your browser does not support video playback.
      </video>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h2>Exciting Changes Are on the Way!</h2>
        <p>
          We're rebuilding our website to provide an enhanced experience for our
          clients and learners. As a learning provider, we're committed to
          delivering innovative and engaging solutions - and our new website
          will reflect just that!
        </p>
        <p>
          In the meantime, we're here to help. For inquiries or to learn more
          about our services, please contact us at{" "}
          <a href="mailto:gareth@learningaugment.com">
            gareth@learningaugment.com
          </a>{" "}
          or<a href="tel:+61448787074">+61448787074</a> Thank you for your
          patience - we can't wait to welcome you back to our refreshed website
          soon!
        </p>
        {/* <Link to="/contact">
          <button className="cta-button">Get a Free Consultation</button>
        </Link> */}
      </div>
    </div>
  );
};

export default TempHeroSection;
