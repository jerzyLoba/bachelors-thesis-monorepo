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

// const PRODUCT_URL_BASE = "http://127.0.0.1:8080/products/";
// const LOGIN_URL = "http://127.0.0.1:8080/user/login";
const CART_URL = "http://127.0.0.1:8080/cart";

function getRand(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default function () {
  // console.log({ __ITER });
  // if (__ITER === 0) {
  //   const payload = JSON.stringify({
  //     email: "test@example.com",
  //     password: "test123",
  //   });
  //   const params = {
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   };

  //   const res = http.post(LOGIN_URL, payload, params);
  //   console.log(res.cookies);
  // }

  const res = http.get(CART_URL, {
    cookies: {
      dev_id: "fdb590c6-c995-49ab-a6d7-c6a7af36484d",
      token: __ENV.TOKEN,
    },
  });
  // console.log({ status: res.status });
  // http.get(`${PRODUCT_URL_BASE}${getRand(1, 3)}`);

  // http.post(url, payload, params);
}
