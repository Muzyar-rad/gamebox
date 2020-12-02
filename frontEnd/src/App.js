import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/home";
import CardItemPage from "./components/cardItemPage";
import ShoppingCart from "./components/shoppingCart";
import CheckOut from "./components/checkOut";
import Footer from "./components/footer";
import "./css/App.css";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/cardItem" component={CardItemPage} />
        <Route path="/shoppingCart" component={ShoppingCart} />
        <Redirect from="/" exact to="/home" />
      </Switch>
      {/* <CheckOut /> */}
      <Footer />
    </div>
  );
}

export default App;
