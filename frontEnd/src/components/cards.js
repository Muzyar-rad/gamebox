import React, { useState, useEffect } from "react";
import CardItem from "./cardItem";
import { getProducts } from "../services/productService";
import "../css/cards.css";

const Cards = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProductList = async () => {
      const productList = await getProducts();
      setProducts(productList.data);
    };
    getProductList();
  }, []);
  return (
    <div className="card-deck p-5">
      {products.map((product) => (
        <CardItem key={product.productId} product={product} />
      ))}
    </div>
  );
};

export default Cards;
