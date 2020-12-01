import React from "react";
import Footer from "./components/footer";
import Home from "./components/home";
import Header from "./components/header";
import "./css/App.css";
import CardItemPage from "./components/cardItemPage";

function App() {
  return (
    <div>
      <Header />
      {/* <CardItemPage /> */}
      <Home />
      <Footer />
    </div>
  );
}

export default App;
