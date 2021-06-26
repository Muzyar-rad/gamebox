import React, { useState, useEffect, Fragment } from "react";
import CardItem from "./cardItem";
import { getProducts } from "../services/productService";
import "../css/cards.css";

const mappedProducts = (products) =>
  products.map((product) => (
    <CardItem key={product.productId} product={product} />
  ));

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
    const filteredProducts = (regex) => {
      return products.filter((product) => product.name.match(regex));
    };

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
    <Fragment>
      <div className="card-deck p-5">{getFilteredProducts(products)}</div>
    </Fragment>
  );
};

export default Cards;
