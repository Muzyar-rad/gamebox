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
    const mappedProducts = products.map((product) => (
      <CardItem key={product.productId} product={product} />
    ));
    if (props.filter === "") return mappedProducts;
    else if (props.filter === "Desktop") {
      products = products.filter((product) =>
        product.name.match(/(Desktop|PC)/i)
      );
      return mappedProducts;
    } else if (props.filter === "Laptop") {
      products = products.filter((product) => product.name.match(/(Laptop)/i));
      return mappedProducts;
    } else if (props.filter === "Gear") {
      products = products.filter(
        (product) => !product.name.match(/(Desktop|PC|Laptop)/i)
      );
      return mappedProducts;
    }
  };
  return (
    <React.Fragment>
      <div className="card-deck p-5">{getFilteredData(products)}</div>
    </React.Fragment>
  );
};

export default Cards;
