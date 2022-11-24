import { useLocation, NavLink } from "react-router-dom";
import { useState } from "react";
import "./header.css";

const Header = () => {
  const { pathname } = useLocation();

  const navStyle = () => {
    switch (pathname) {
      case "/Japon":
        return `rgba(188, 0, 45, 0.85)`;
      case "/Voyage":
        return `rgba(137, 196, 244, 0.85 )`;
      case "/France":
        return `rgba(0, 33, 83, 0.85)`;
      default:
        return `blue`;
    }
  };

  const [showLinks, setShowLInks] = useState(false);

  const handleShowLinks = () => {
    setShowLInks(!showLinks);
  };

  return (
    <div className="navBar-tel" style={{ backgroundColor: navStyle() }}>
      <span>
        <NavLink to="/" onClick={handleShowLinks}>
          Travel Maker
        </NavLink>
      </span>
      <div className="destination-travel">
        <section
          className={`navbar ${showLinks ? "show-Navbar" : "Hide-Navbar"}`}
        >
          <nav className="navbar">
            <p onClick={handleShowLinks}>Destination </p>
            <ul
              className="navbar__links_slideInDown"
              style={{ backgroundColor: navStyle() }}
            >
              <li>
                <NavLink to="/Japon" onClick={handleShowLinks}>
                  Japon
                </NavLink>
              </li>
              <li>
                <NavLink to="/France" onClick={handleShowLinks}>
                  France
                </NavLink>
              </li>
              <li>Corée du Nord</li>
              <li>Canada</li>
            </ul>
          </nav>
        </section>
        <p className="navbar_item">
          <NavLink to="/Voyage">Voyage</NavLink>
        </p>
      </div>
    </div>
  );
};

export default Header;
