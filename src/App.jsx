import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";
import CaseStudies from "./pages/CaseStudies";
import Contact from "./pages/Contact";
import DesignSoftware from "./pages/DesignSoftware";
import Industries from "./pages/Industries";
import Solutions from "./pages/Solutions";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/design-software" element={<DesignSoftware />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/solutions" element={<Solutions />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
