import React from "react";
import { Link } from "react-router-dom";

// image
import HomeIcon from "../assets/icons_assets/Logo.svg";
import FacebookIcon from "../assets/icons_assets/facebook.png";
import InstagramIcon from "../assets/icons_assets/instagram.png";
import XIcon from "../assets/icons_assets/twitter.png";

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
              <Link to="/#reservation">Reservation</Link>
            </li>
            <li>
              <Link to="/booking">Order Online</Link>
            </li>
            <li>
              <Link to="#login">Login</Link>
            </li>
          </ul>
        </section>

        <section>
          <h3>Contact</h3>
          <ul>
            <li>
              <p>Adress</p>
            </li>
            <li>
              <p>Phone Number</p>
            </li>
            <li>
              <p>Email</p>
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
                <img src={InstagramIcon} alt="facebook" /> <p>Instagram</p>
              </a>
            </li>
            <li>
              <a
                href="http://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="social"
              >
                <img src={XIcon} alt="facebook" /> <p>X/Twitter</p>
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
