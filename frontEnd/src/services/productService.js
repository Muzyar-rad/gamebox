import http from "./httpService";

const productUrl = "http:/localhost:3201/api/products";

getProducts = async () => {
  return http.get(productUrl);
};

module.exports = getProducts;
