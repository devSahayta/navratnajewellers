import { FaMapMarkerAlt } from '@react-icons/all-files/fa/FaMapMarkerAlt';
import { FaPhoneAlt } from '@react-icons/all-files/fa/FaPhoneAlt';
import { FaEnvelope } from '@react-icons/all-files/fa/FaEnvelope';
import { FaFacebookF } from '@react-icons/all-files/fa/FaFacebookF';
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter';
import { FaInstagram } from '@react-icons/all-files/fa/FaInstagram';

import '../styles/newHeader.css';

const NewFooter = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About */}
        <div className="footer-column">
          <h3>About Navratna</h3>
          <p>
            Navratna Jewellers is known for purity, trust, and elegant
            craftsmanship in gold, silver, and diamond jewellery.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-column ">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Policies</a>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div className="footer-column">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Contact */}
        <div className="footer-column">
          <h3 className="fo">Contact Us</h3>
          <p>
            <FaMapMarkerAlt /> Beside Gurudwara, Main Road, Ranchi, Jharkhand
          </p>
          <p>
            <FaPhoneAlt /> +91 98765 43210
          </p>
          <p>
            <FaEnvelope /> contact@navratnajewellers.com
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Navratna Jewellers. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default NewFooter;
