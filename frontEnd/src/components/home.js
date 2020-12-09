import React from "react";
import Carousal from "./carousal";
import NavFilter from "./navFilter";
import Cards from "./cards";

const Home = () => {
  let filter = "";
  console.log(filter);
  return (
    <React.Fragment>
      <Carousal />
      <NavFilter filter={filter} />
      <Cards filter={filter} />
    </React.Fragment>
  );
};

export default Home;
