import { Link } from "react-router-dom";
import "./solutions.css";
import FooterSpacer from "../components/FooterSpacer";

const Solutions = () => {
  const expertiseItems = [
    {
      title: "Bespoke eLearning",
      description:
        "Custom-designed courses tailored to your specific needs and objectives.",
      icon: "🎓",
    },
    {
      title: "Microlearning",
      description: "Engaging, bite-sized content for on-demand learning.",
      icon: "📱",
    },
    {
      title: "User Guides & Simulations",
      description:
        "Interactive, hands-on tools that reinforce practical skills.",
      icon: "🔧",
    },
    {
      title: "Compliance Training",
      description:
        "Simplified modules to meet critical policies and standards.",
      icon: "✓",
    },
  ];

  return (
    <div className="solutions-page">
      <section className="solutions-intro">
        <div className="solutions-intro-content">
          <h2>Tailored Solutions to Elevate Learning</h2>
          <p>
            At Learning Augment, we deliver customised learning experiences that
            address your unique organisational challenges. From bespoke
            eLearning to microlearning and compliance training, our solutions
            empower your workforce to succeed.
          </p>
          <img
            src="/images/solutions/learning-solutions.jpg"
            alt="Innovative learning solutions"
            loading="lazy"
          />
        </div>
      </section>

      <section className="solutions-expertise">
        <div className="expertise-content">
          <h2>Explore Our Expertise</h2>
          <div className="expertise-grid">
            {expertiseItems.map((item) => (
              <div key={item.title} className="expertise-card">
                <span className="service-icon">{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="examples-section">
        <div className="examples-content">
          <h2>See Our Solutions in Action</h2>
          <p>
            Our work speaks for itself. Browse through examples of our eLearning
            projects, including engaging simulations, microlearning modules, and
            compliance training programs that deliver measurable results.
          </p>
          <div className="carousel">
            {/* Add carousel/portfolio items here */}
            <img
              src="/images/solutions/portfolio-preview.jpg"
              alt="Portfolio preview"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Transform Learning in Your Organisation?</h2>
          <p>
            Get in touch with us today to explore how we can help your team
            thrive.
          </p>
          <Link to="/contact">
            <button className="cta-button">Contact Us</button>
          </Link>
        </div>
      </section>

      <FooterSpacer />
    </div>
  );
};

export default Solutions;
