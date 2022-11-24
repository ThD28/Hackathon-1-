import "@components/Header/Header.css";
import { Link } from "react-router-dom";
import logoAvion from "@assets/avion.png";

const Header = () => {
  return (
    <section id="telnav">
      <nav className="navbar">
        <img src={logoAvion} alt="avion" />
        <ul className="navbar__links_slideInDown">
          <li className="navbar__item">
            <Link to="/" className="navbar__link">
              Home{" "}
            </Link>
          </li>
          <li className="navbar__item">
            <Link to="/Japon" className="navbar__link">
              Japon{" "}
            </Link>
          </li>
          <li className="navbar__item">
            <Link to="/Voyage" className="navbar__link">
              Voyage
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Header;
