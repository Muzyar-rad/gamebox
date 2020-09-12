const express = require("express");
const products = require("../queries/products");

module.exports = (app) => {
  app.use(express.json());
  app.use("/api/products", products);
};

module.exports = (app) => {
  app.use(express.json());
  app.use("/api/products", products);
};
