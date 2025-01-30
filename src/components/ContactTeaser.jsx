import { Link } from "react-router-dom";
import "./contact-teaser.css";
const ContactTeaser = () => {
  return (
    <>
      <div className="contact-teaser">
        <h2>Lets Build Something Great Together</h2>
        <p>
          Ready to elevate your organisation's learning? Get in touch today to
          start the journey.
        </p>
        <Link to="/contact">
          <button className="cta-button">Contact Us</button>
        </Link>
      </div>
    </>
  );
};

export default ContactTeaser;
