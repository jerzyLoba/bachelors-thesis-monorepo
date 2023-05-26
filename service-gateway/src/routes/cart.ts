import express from "express";

import { AddToCartRequest } from "../proto/inz/cart/AddToCartRequest";
import { RemoveFromCartRequest } from "../proto/inz/cart/RemoveFromCartRequest";
import { GetCartRequest } from "../proto/inz/cart/GetCartRequest";
import { cartServiceClient } from "../clients/cart";
import { PayloadWihtoutId } from "../types/cart";
import { authMiddleware } from "../middlewares";

const router = express.Router();

router.use(authMiddleware);

router.get<{}, {}, PayloadWihtoutId<GetCartRequest>>("/", (req, res) => {
  try {
    const { user_id } = req;

    cartServiceClient.GetCart({ user_id }, (err, response) => {
      if (err) {
        console.log(err);
      }
      console.log("service-cart: get cart from microservice ok");
      console.log(response);

      return res.status(200).send(response.cart);
    });
  } catch (e) {
    console.log("service-gateway:cartServiceClient:GetCart:error", e);
    return res.sendStatus(500);
  }
});

router.patch<{}, {}, PayloadWihtoutId<AddToCartRequest>>("/", (req, res) => {
  try {
    const { user_id } = req;
    const { product_id, quantity } = req.body;

    cartServiceClient.AddToCart(
      { user_id, product_id, quantity },
      (err, response) => {
        if (err) {
          console.log(err);
        }
        console.log("service-cart: update cart from microservice ok");
        console.log(response);

        return res.status(200).send(response.cart);
      }
    );
  } catch (e) {
    console.log("service-gateway:cartServiceClient:AddToCart:error", e);
    return res.sendStatus(500);
  }
});

router.delete<{}, {}, PayloadWihtoutId<RemoveFromCartRequest>>(
  "/",
  (req, res) => {
    try {
      const { user_id } = req;
      const { product_id, quantity } = req.body;

      cartServiceClient.RemoveFromCart(
        { user_id, product_id, quantity },
        (err, response) => {
          if (err) {
            console.log(err);
          }
          console.log("service-cart: remove from cart from microservice ok");
          console.log(response);

          return res.status(200).send(response.cart);
        }
      );
    } catch (e) {
      console.log("service-gateway:cartServiceClient:RemoveFromCart:error", e);
      return res.sendStatus(500);
    }
  }
);

export { router as cartRouter };
