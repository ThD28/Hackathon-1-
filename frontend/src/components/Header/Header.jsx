import { useState } from "react";
import "./header.css";
import logoAvion from "../../assets/avion.png";
// import { Link } from "react-router-dom";

const Header = () => {
  const [showLinks, setShowLInks] = useState(false);

  const handleShowLinks = () => {
    setShowLInks(!showLinks);
  };

  return (
    <div className="navBar-tel">
      <img src={logoAvion} alt="avion" />
      <div className="destination-travel">
        <section
          className={`navbar ${showLinks ? "show-Navbar" : "Hide-Navbar"}`}
        >
          <nav className="navbar">
            <button type="button" onClick={handleShowLinks}>
              Destination{" "}
            </button>
            <ul className="navbar__links_slideInDown">
              <li>Japon</li>
              <li>France</li>
              <li>Corée du Nord</li>
              <li>Canada</li>
            </ul>
          </nav>
        </section>
        <ul>
          <li className="navbar_item">Voyage</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
