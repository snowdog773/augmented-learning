import { Link } from "react-router-dom";
import "./contact-teaser.css";

const ContactTeaser = () => {
  return (
    <section className="contact-teaser">
      <div className="contact-content">
        <div className="contact-image">
          <div className="image-overlay"></div>
          <img
            src="./images/home/contact-team.jpg"
            alt="Team collaborating on digital learning solutions"
            loading="lazy"
          />
        </div>
        <div className="contact-text">
          <h2>Let's Build Something Great Together</h2>
          <p>
            Ready to elevate your organisation's learning? Get in touch today to
            start the journey.
          </p>
          <Link to="/contact">
            <button className="cta-button">Contact Us</button>
          </Link>
        </div>
      </div>
      <div className="background-pattern"></div>
    </section>
  );
};

export default ContactTeaser;
