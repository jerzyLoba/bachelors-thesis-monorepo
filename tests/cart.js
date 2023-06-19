import http from "k6/http";

export const options = {
  stages: [
    { duration: "1m", target: 5 },
    { duration: "1m", target: 20 },
    { duration: "2m", target: 60 },
    { duration: "1m", target: 30 },
    { duration: "1m", target: 10 },
  ],
};

const CART_URL = "http://127.0.0.1:8080/cart";

export default function () {
  http.get(CART_URL, {
    cookies: {
      dev_id: "fdb590c6-c995-49ab-a6d7-c6a7af36484d",
      token: __ENV.TOKEN,
    },
  });
}
