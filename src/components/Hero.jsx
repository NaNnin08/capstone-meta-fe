import React from "react";

import RestauranfoodImage from "../assets/icons_assets/restauranfood.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero_description">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Neduterranean restaurant, focused on traditional
          recipes serves with a modern twist.
        </p>
        <button className="reserve">Reserve a Table</button>
      </div>
      <div className="hero_image">
        <img src={RestauranfoodImage} alt="hero little lemon" />
      </div>
    </div>
  );
};

export default Hero;
