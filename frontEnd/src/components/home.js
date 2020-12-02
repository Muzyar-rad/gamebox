import React from "react";
import Carousal from "./carousal";
import NavFilter from "./navFilter";
import Cards from "./cards";

const Home = () => {
  return (
    <React.Fragment>
      <Carousal />
      <NavFilter />
      <Cards />
    </React.Fragment>
  );
};

export default Home;
