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

  const getFilteredProducts = (products) => {
    const mappedProducts = (products) =>
      products.map((product) => (
        <CardItem key={product.productId} product={product} />
      ));
    const filteredProducts = (regex) =>
      (products = products.filter((product) => product.name.match(regex)));
    if (props.filter === "") return mappedProducts(products);
    else if (props.filter === "Desktop") {
      filteredProducts(/(Desktop|PC)/i);
      return mappedProducts(products);
    } else if (props.filter === "Laptop") {
      filteredProducts(/(Laptop)/i);
      return mappedProducts(products);
    } else if (props.filter === "Gear") {
      filteredProducts(/^(?!.*Desktop|.*PC|.*Laptop).*$/i);
      return mappedProducts(products);
    }
  };
  return (
    <React.Fragment>
      <div className="card-deck p-5">{getFilteredProducts(products)}</div>
    </React.Fragment>
  );
};

export default Cards;
