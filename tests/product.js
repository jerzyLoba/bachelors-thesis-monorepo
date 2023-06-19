import http from "k6/http";

export const options = {
  stages: [
    { duration: "30s", target: 10 },
    { duration: "1m", target: 30 },
    { duration: "1m", target: 60 },
    { duration: "30s", target: 10 },
    { duration: "1m", target: 40 },
    { duration: "1m", target: 15 },
    { duration: "1m", target: 5 },
  ],
};

const PRODUCT_URL_BASE = "http://127.0.0.1:8080/products/";
const CART_URL = "http://127.0.0.1:8080/cart";

function getRand(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default function () {
  http.get(`${PRODUCT_URL_BASE}${getRand(1, 3)}`);
}
