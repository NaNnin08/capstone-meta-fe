import React from "react";
import { Link } from "react-router-dom";

// image
import HomeIcon from "../assets/icons_assets/Logo.svg";
import FacebookIcon from "../assets/icons_assets/facebook.png";
import InstagramIcon from "../assets/icons_assets/instagram.png";
import XIcon from "../assets/icons_assets/twitter.png";
import AdressIcon from "../assets/icons_assets/location.png";
import PhoneIcon from "../assets/icons_assets/phone.png";
import EmailIcon from "../assets/icons_assets/mail.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="icon_web">
          <img src={HomeIcon} alt="icon home" />
        </div>

        <section>
          <h3>Doormant Navigation</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/#about">About</Link>
            </li>
            <li>
              <Link to="/#menu">Menu</Link>
            </li>
            <li>
              <Link to="/#reserve">Reservation</Link>
            </li>
            <li>
              <Link to="/booking">Order Online</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </section>

        <section>
          <h3>Contact</h3>
          <ul>
            <li>
              <a
                href="http://maps.google.com/?q=1234 Flavor Street, Chicago, IL 60657"
                target="_blank"
                rel="noreferrer"
                className="social"
              >
                <img src={AdressIcon} alt="location" />{" "}
                <p>
                  1234 Flavor Street, <br />
                  Chicago, IL 60657
                </p>
              </a>
            </li>
            <li>
              <a
                href={`tel:+3125551234`}
                target="_blank"
                rel="noreferrer"
                className="social"
              >
                <img src={PhoneIcon} alt="phone" /> <p>(312) 555-1234</p>
              </a>
            </li>
            <li>
              <a
                href={`mailto:info@littlelemon.com`}
                target="_blank"
                rel="noreferrer"
                className="social"
              >
                <img src={EmailIcon} alt="email" /> <p>info@littlelemon.com</p>
              </a>
            </li>
          </ul>
        </section>

        <section>
          <h3>Social Media Links</h3>
          <ul>
            <li>
              <a
                href="http://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="social"
              >
                <img src={FacebookIcon} alt="facebook" /> <p>Facebook</p>
              </a>
            </li>
            <li>
              <a
                href="http://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="social"
              >
                <img src={InstagramIcon} alt="instagram" /> <p>Instagram</p>
              </a>
            </li>
            <li>
              <a
                href="http://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="social"
              >
                <img src={XIcon} alt="twitter/X" /> <p>X/Twitter</p>
              </a>
            </li>
          </ul>
        </section>
      </div>

      <section className="copy">
        <p>&copy; 2024 Little Lemon. All Rights Reserved.</p>
      </section>
    </footer>
  );
};

export default Footer;
