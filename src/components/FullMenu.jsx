import { Link } from "react-router-dom";

const FullMenu = () => {
  return (
    <div className="menuContainerFull">
      <ul>
        <li>
          <Link to="/solutions">Solutions</Link>
        </li>
        <li>
          <Link to="/industries">Industries</Link>
        </li>
        <li>
          <Link to="/about-us">About Us</Link>
        </li>
        <li>
          <Link to="/case-studies">Case Studies</Link>
        </li>
        <li>
          <Link to="/design-software">Design Software</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default FullMenu;
