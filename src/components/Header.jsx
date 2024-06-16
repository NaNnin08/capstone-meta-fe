import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

// image
import HomeIcon from "../assets/icons_assets/Logo.svg";

const Header = () => {
  // state
  const [isLogin, setIsLogin] = useState(false);

  // router
  const location = useLocation();
  const navigate = useNavigate();

  //func
  const onLogout = () => {
    sessionStorage.removeItem("_user");

    navigate("/");
  };

  // effect
  useEffect(() => {
    const session = sessionStorage.getItem("_user");
    if (session) {
      setIsLogin(true);
      return;
    }

    setIsLogin(false);
  }, [location]);

  return (
    <nav>
      <div className="icon_web">
        <Link to="/">
          <img src={HomeIcon} alt="icon home" />
        </Link>
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
          <Link to="/#reserve">Reservation</Link>
        </li>
        <li>
          <Link to="/booking">Order Online</Link>
        </li>
        <li>
          <Link
            to={isLogin ? "/" : "/login"}
            onClick={isLogin ? onLogout : null}
          >
            {isLogin ? "Logout" : "Login"}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
