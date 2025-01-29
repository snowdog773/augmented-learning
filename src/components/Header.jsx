import FullMenu from "./FullMenu";
import MobileMenu from "./MobileMenu";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="header">
        <Link to="/">
          {" "}
          <h1>Learning Augment</h1>
        </Link>
        <FullMenu />
        <MobileMenu />
      </header>
    </>
  );
};

export default Header;
