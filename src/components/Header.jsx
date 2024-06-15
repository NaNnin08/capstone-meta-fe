import React from "react";
import { Link } from "react-router-dom";

// image
import HomeIcon from "../assets/icons_assets/Logo.svg";

const Header = () => {
  return (
    <nav>
      <div className="icon_web">
        <img src={HomeIcon} alt="icon home" />
      </div>
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
    </nav>
  );
};

export default Header;
