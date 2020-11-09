import React from "react";
import NavBar from "./components/navBar";
import Carousal from "./components/carousal";
import "./App.css";
function App() {
  return (
    <div className="main mh-100">
      <NavBar />
      <Carousal />
    </div>
  );
}

export default App;
