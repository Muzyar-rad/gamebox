import http from "./httpService";

const productUrl = "http://localhost:3201/api/products";

export async function getProducts() {
  return http.get(productUrl);
}
