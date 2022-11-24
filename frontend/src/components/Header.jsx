import "./header.css";
import logoAvion from "@assets/avion.png";

const Header = () => {
  return (
    <section id="telnav">
      <nav className="navbar">
        <img src={logoAvion} alt="avion" />
        <ul className="navbar__links_slideInDown">
          <li className="navbar__item">Destination</li>
          <li className="navbar__item">Voyage</li>
        </ul>
      </nav>
    </section>
  );
};

export default Header;
