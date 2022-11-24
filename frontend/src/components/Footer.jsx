import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faMastodon,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="icons">
      <p>Copyright &#169; 2022-2023 </p>

      <FontAwesomeIcon icon={faFacebook} />

      <FontAwesomeIcon icon={faInstagram} />

      <FontAwesomeIcon icon={faMastodon} />
    </div>
  );
};

export default Footer;
