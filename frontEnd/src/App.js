import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import WelcomeModal from "./components/welcomeModal";
import Header from "./components/header";
import Home from "./components/home";
import CardItemPage from "./components/cardItemPage";
import ShoppingCart from "./components/shoppingCart";
import CheckOut from "./components/checkOut";
import Footer from "./components/footer";
import "./css/App.css";

function App() {
  const [modalShow, setModalShow] = React.useState(true);
  return (
    <div>
      <WelcomeModal show={modalShow} onHide={() => setModalShow(false)} />
      <Header />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/carditem" component={CardItemPage} />
        <Route path="/shoppingcart" component={ShoppingCart} />
        <Route path="/checkout" component={CheckOut} />
        <Redirect from="/" exact to="/home" />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
