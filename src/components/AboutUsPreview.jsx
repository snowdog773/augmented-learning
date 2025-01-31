import { Link } from "react-router-dom";
import "./aboutuspreview.css";
const AboutUsPreview = () => {
  return (
    <>
      <section className="about-preview">
        <div className="about-content">
          <div className="about-text">
            <h2>Your Partner in Learning Excellence</h2>
            <p>
              At Learning Augment, we combine years of experience with
              cutting-edge tools to create learning solutions that drive
              results.
            </p>
            <Link to="/about-us">
              <button className="cta-button">Learn More About Us</button>
            </Link>
          </div>
          <div className="about-image">
            <div className="image-overlay"></div>
            <img
              src="./images/home/professional-team.jpg"
              alt="Professional team collaborating on digital learning solutions"
              loading="lazy"
            />
          </div>
        </div>
        <div className="background-pattern"></div>
      </section>
    </>
  );
};

export default AboutUsPreview;
