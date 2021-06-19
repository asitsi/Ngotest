import React from "react";
import Slider from "../Components/Slider/Slider";
import AboutUs from "./AboutUs";
import Service from "./Service";
import Contact from "./Contact";
import Fotter from "../Components/Fotter/Fotter";

const Home = () => {
  return (
    <div>
      <Slider />
      <AboutUs />
      <Service />
      <Contact />
      <Fotter />
    </div>
  );
};

export default Home;
