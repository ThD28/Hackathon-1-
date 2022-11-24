import { useState } from "react";
import "./header.css";
// import { Link } from "react-router-dom";

const Header = () => {
  const [showLinks, setShowLInks] = useState(false);

  const handleShowLinks = () => {
    setShowLInks(!showLinks);
  };

  return (
    <div className="navBar-tel">
      <span>Travel Maker</span>
      <div className="destination-travel">
        <section
          className={`navbar ${showLinks ? "show-Navbar" : "Hide-Navbar"}`}
        >
          <nav className="navbar">
            <p onClick={handleShowLinks}>Destination </p>
            <ul className="navbar__links_slideInDown">
              <li>Japon</li>
              <li>France</li>
              <li>Corée du Nord</li>
              <li>Canada</li>
            </ul>
          </nav>
        </section>
        <p className="navbar_item">Voyage</p>
      </div>
    </div>
  );
};

export default Header;
