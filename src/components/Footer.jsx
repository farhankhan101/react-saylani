import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = ({ theme }) => {
  return (
    <footer className={`footer ${theme}`}>
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        <span>© 2024 <a href="https://github.com/farhankhan101">Farhan</a></span>
        <div className="social-icons mt-2 mt-md-0">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="ms-0 ms-md-3">
            <FontAwesomeIcon icon={faFacebook} size="1x" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="ms-3">
            <FontAwesomeIcon icon={faTwitter} size="1x" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="ms-3">
            <FontAwesomeIcon icon={faInstagram} size="1x" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="ms-3">
            <FontAwesomeIcon icon={faLinkedin} size="1x" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
