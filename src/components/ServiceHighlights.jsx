import { Link } from "react-router-dom";
import "./serviceHighlights.css";
const ServiceHighlights = () => {
  const services = [
    {
      icon: "🎓",
      title: "Bespoke eLearning",
      description: "Custom courses designed for your unique needs.",
      link: "/services/elearning",
    },
    {
      icon: "📱",
      title: "Microlearning",
      description: "Bite-sized learning for on-the-go professionals.",
      link: "/services/microlearning",
    },
    {
      icon: "🔧",
      title: "User Guides & Simulations",
      description: "Practical tools for hands-on learning.",
      link: "/services/guides",
    },
    {
      icon: "✓",
      title: "Compliance Training",
      description: "Simplified training for complex policies.",
      link: "/services/compliance",
    },
  ];

  return (
    <section className="service-highlights">
      <div className="service-container">
        <h2>Tailored Learning Solutions to Achieve Your Goals</h2>
        <div className="service-grid">
          {services.map((service) => (
            <div key={service.title} className="service-card">
              <span className="service-icon">{service.icon}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
        <Link to="/contact">
          <button className="cta-button">Learn More About Our Services</button>
        </Link>
      </div>
    </section>
  );
};

export default ServiceHighlights;
