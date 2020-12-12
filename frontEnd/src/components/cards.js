import React, { useState, useEffect } from "react";
import CardItem from "./cardItem";
import { getProducts } from "../services/productService";
import "../css/cards.css";

const Cards = (props) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProductList = async () => {
      const productList = await getProducts();
      setProducts(productList.data);
    };
    getProductList();
  }, []);

  const getFilteredData = (products) => {
    console.log(products);
    if (props.filter === "")
      return products.map((product) => (
        <CardItem key={product.productId} product={product} />
      ));
    else if (props.filter === "Desktop") {
      products.forEach((product) => product.name.match(/(Desktop)/));
      return products.map((product) => (
        <CardItem key={product.productId} product={product} />
      ));
    } else if (props.filter === "Laptop") {
      products.forEach((product) => product.name.match(/(Laptop)/));
      return products.map((product) => (
        <CardItem key={product.productId} product={product} />
      ));
    } else if (props.filter === "Gear") {
      products.forEach((product) => product.name.match(/(Laptop)/));
      return products.map((product) => (
        <CardItem key={product.productId} product={product} />
      ));
    }
  };
  return (
    <React.Fragment>
      <div className="card-deck p-5">{getFilteredData(products)}</div>
    </React.Fragment>
  );
};

export default Cards;
