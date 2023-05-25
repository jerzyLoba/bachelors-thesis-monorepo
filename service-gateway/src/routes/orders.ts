import express from "express";
import { orderServiceClient } from "../clients/orders";
import { AuthedRequest } from "../middlewares";

const router = express.Router();

router.get("/", (req: AuthedRequest, res: express.Response) => {
  try {
    const { user_id } = req.body;

    orderServiceClient.GetUserOrders({ user_id }, (err, response) => {
      if (err) {
        throw err;
      }
      console.log("service-orders: get user orders from microservice ok");
      console.log(response);

      return res.status(200).send(response.orders);
    });
  } catch (e) {
    console.log("service-gateway:ordersServiceClient:GetUserOrders:error", e);
    return res.sendStatus(500);
  }
});

router.post("/place", (req: AuthedRequest, res: express.Response) => {
  try {
    const { user_id } = req.body;
    orderServiceClient.PlaceOrder({ user_id }, (err, response) => {
      if (err) {
        throw err;
      }
      console.log("service-orders: place order from microservice ok");
      console.log(response);

      return res.status(200).send(response.order);
    });
  } catch (e) {
    console.log("service-gateway:ordersServiceClient:PlaceOrder:error", e);
    return res.sendStatus(500);
  }
});

export { router as ordersRouter };
