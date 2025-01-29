import { Link } from "react-router-dom";
import HamburgerIcon from "./HamburgerIcon";
import { useState } from "react";

const MobileMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <div className="menuContainerMobile">
        <div className="menuButton" onClick={() => setMenuOpen(!menuOpen)}>
          <HamburgerIcon />
        </div>

        {menuOpen && (
          <div className="menuOverlay" onClick={() => setMenuOpen(false)}></div>
        )}
        <ul className={menuOpen ? "active" : ""}>
          <li>
            <Link to="/solutions" onClick={handleClick}>
              Solutions
            </Link>
          </li>
          <li>
            <Link to="/industries" onClick={handleClick}>
              Industries
            </Link>
          </li>
          <li>
            <Link to="/about-us" onClick={handleClick}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/case-studies" onClick={handleClick}>
              Case Studies
            </Link>
          </li>
          <li>
            <Link to="/design-software" onClick={handleClick}>
              Design Software
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={handleClick}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MobileMenu;
