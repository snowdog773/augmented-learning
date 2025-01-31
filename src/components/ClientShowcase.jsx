import { Link } from "react-router-dom";
import "./clientShowcase.css";
const ClientShowcase = () => {
  const clients = [
    {
      name: "Commonwealth Bank",
      logo: "/images/home/commonwealthBankLogo.jpg",
      caseStudyUrl: "/case-studies/commonwealth-bank",
    },
    {
      name: "NSW Rural Fire Service",
      logo: "/images/home/nswRuralFireServiceLogo.png",
      caseStudyUrl: "/case-studies/nsw-rfs",
    },
    {
      name: "Beyond Blue",
      logo: "/images/home/beyondBlueLogo.svg",
      caseStudyUrl: "/case-studies/beyond-blue",
    },
  ];

  return (
    <section className="client-showcase">
      <div className="container">
        <h2>Trusted by Leading Organisations Across Industries</h2>
        <p className="subtitle">
          We've partnered with renowned clients to deliver impactful learning
          solutions.
        </p>

        <div className="logo-grid">
          {clients.map((client) => (
            <Link
              key={client.name}
              to={client.caseStudyUrl}
              className="client-logo-link"
              aria-label={`View ${client.name} case study`}
            >
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                className="client-logo"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientShowcase;
