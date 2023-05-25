import express from "express";
import { AuthedRequest } from "../middlewares";
import { cartServiceClient } from "../clients/cart";
import { AddToCartRequest } from "../proto/inz/cart/AddToCartRequest";
import { RemoveFromCartRequest } from "../proto/inz/cart/RemoveFromCartRequest";

const router = express.Router();

router.get("/", (req: AuthedRequest, res: express.Response) => {
  try {
    const { user_id } = req.body;

    cartServiceClient.GetCart({ user_id }, (err, response) => {
      if (err) {
        throw err;
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

router.patch(
  "/",
  (req: AuthedRequest<{}, {}, AddToCartRequest>, res: express.Response) => {
    try {
      const { user_id, product_id, quantity } = req.body;

      cartServiceClient.AddToCart(
        { user_id, product_id, quantity },
        (err, response) => {
          if (err) {
            throw err;
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
  }
);

router.delete(
  "/",
  (
    req: AuthedRequest<{}, {}, RemoveFromCartRequest>,
    res: express.Response
  ) => {
    try {
      const { user_id, product_id, quantity } = req.body;

      cartServiceClient.RemoveFromCart(
        { user_id, product_id, quantity },
        (err, response) => {
          if (err) {
            throw err;
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
