import React from "react";
import Header from "./components/header";
import Home from "./components/home";
import CardItemPage from "./components/cardItemPage";
import ShoppingCart from "./components/shoppingCart";
import Footer from "./components/footer";
import "./css/App.css";

function App() {
  return (
    <div>
      <Header />
      {/* <Home /> */}
      {/* <CardItemPage /> */}
      <ShoppingCart />

      <Footer />
    </div>
  );
}

export default App;
