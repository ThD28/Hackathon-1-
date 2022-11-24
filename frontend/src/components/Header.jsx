import "./header.css";

const Header = () => {
  return (
    <section id="telnav">
      <nav className="navbar">
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round" />
        </label>
        <ul className="navbar__links slideInDown  ">
          <li className="navbar__item">Destination</li>
          <li className="navbar__item">Voyage</li>
        </ul>
        <button type="button" className="navbar__burger">
          <span className="burger__bar"> </span>
        </button>
      </nav>
    </section>
  );
};

export default Header;
