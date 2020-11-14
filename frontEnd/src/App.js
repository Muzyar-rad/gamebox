import React from "react";
import NavBar from "./components/navBar";
import Carousal from "./components/carousal";
import Card from "./components/card";
import "./css/App.css";
function App() {
  return (
    <div className="main mh-100">
      <NavBar />
      <Carousal />
      <Card />
    </div>
  );
}

export default App;
