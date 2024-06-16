import React from "react";

// image
import AboutImage from "../assets/icons_assets/restaurant.jpg";
import AboutImageB from "../assets/icons_assets/restaurant_b.jpg";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about_text">
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>

        <p>
          Welcome to Little Lemon, a cozy restaurant located in the heart of
          Chicago. We specialize in offering delicious and freshly prepared
          dishes with a focus on quality ingredients and exceptional service.
          Our mission is to provide a memorable dining experience for our
          guests, whether you're here for a casual meal, a family gathering, or
          a special celebration.
        </p>
      </div>

      <div className="about_image">
        <img src={AboutImageB} alt="image_about" />
        <img src={AboutImage} alt="image_about" />
      </div>
    </div>
  );
};

export default About;
