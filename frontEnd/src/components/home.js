import React from "react";
import Carousal from "./carousal";
import NavFilter from "./navFilter";
import Cards from "./cards";

const Home = () => {
  const [selectedFilter, setSelectedFilter] = React.useState("");
  const setFilter = (filter) => setSelectedFilter(filter);
  return (
    <React.Fragment>
      <Carousal />
      <NavFilter onFilterSelect={setFilter} />
      <Cards filter={selectedFilter} />
    </React.Fragment>
  );
};

export default Home;
