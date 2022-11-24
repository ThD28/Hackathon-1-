import "@components/Footer/Footer.css";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faMastodon,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const { pathname } = useLocation();
  const footStyle = () => {
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

  return (
    <div className="foot" style={{ backgroundColor: footStyle() }}>
      <p>Copyright &#169; 2022-2023 </p>
      <div className="icon">
        <FontAwesomeIcon icon={faFacebook} />

        <FontAwesomeIcon icon={faInstagram} />

        <FontAwesomeIcon icon={faMastodon} />
      </div>
    </div>
  );
};

export default Footer;
