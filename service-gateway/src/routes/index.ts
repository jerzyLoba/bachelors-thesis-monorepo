import express from "express";
import { collectDefaultMetrics, register } from "prom-client";

import { userRouter } from "./user";
import { productsRouter } from "./products";
import { cartRouter } from "./cart";
import { ordersRouter } from "./orders";
import { authMiddleware } from "../middlewares";

collectDefaultMetrics();

const router = express.Router();

router.use("/user", userRouter);
router.use("/products", productsRouter);
router.use("/cart", cartRouter);
router.use("/orders", authMiddleware, ordersRouter);
router.use("/ping", (_req, res) => {
  // sanity check
  res.status(200).send("pong");
});
router.get("/metrics", async (_req, res) => {
  try {
    res.set("Content-Type", register.contentType);
    res.end(await register.metrics());
  } catch (err) {
    res.status(500).end(err);
  }
});

export { router as mainRouter };
