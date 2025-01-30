import AboutUsPreview from "../components/AboutUsPreview";
import ClientShowcase from "../components/ClientShowcase";
import HeroSection from "../components/HeroSection";
import ServiceHighlights from "../components/ServiceHighlights";
import FooterSpacer from "../components/FooterSpacer";
import ContactTeaser from "../components/ContactTeaser";
import { Contact } from "lucide-react";

const Home = () => {
  return (
    <>
      <HeroSection />
      <ClientShowcase />
      <ServiceHighlights />
      <AboutUsPreview />
      <ContactTeaser />
      <FooterSpacer />
    </>
  );
};

export default Home;
