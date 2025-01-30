import { Link } from "react-router-dom";
import "./aboutuspreview.css";
const AboutUsPreview = () => {
  return (
    <>
      <section className="about-preview">
        <h2>Your Partner In Learning Excellence</h2>
        <p>
          At Learning Augment, we combine years of experience with cutting-edge
          tools to create learning solutions that drive results.{" "}
          <Link to="/about">Learn More About Us </Link>
          {/* Placeholder: Background
          image or visual element that conveys professionalism and innovation. */}
        </p>
      </section>
    </>
  );
};

export default AboutUsPreview;
