import express from "express";
import { userRouter } from "./user";
import { productsRouter } from "./products";
import { cartRouter } from "./cart";
import { ordersRouter } from "./orders";

import { authMiddleware } from "../middlewares";

const router = express.Router();

router.use("/user", userRouter);
router.use("/products", productsRouter);
router.use("/cart", authMiddleware, cartRouter);
router.use("/orders", authMiddleware, ordersRouter);
router.use("/ping", (_req, res) => {
  // sanity check
  res.status(200).send("pong");
});

export { router as mainRouter };
