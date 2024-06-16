import React from "react";

// component
import Hero from "../components/Hero";
import Menu from "../components/Menu";
import Testimonials from "../components/Testimonials";
import About from "../components/About";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <Menu />
      <Testimonials />
      <About />
    </div>
  );
};

export default Homepage;
