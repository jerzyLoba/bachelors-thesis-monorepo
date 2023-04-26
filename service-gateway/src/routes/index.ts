import express from "express";
import { userRouter } from "./user";
import { productsRouter } from "./products";

const router = express.Router();

router.use("/user", userRouter);
router.use("/products", productsRouter);
router.use("/ping", (_req, res) => {
  // sanity check
  res.status(200).send("pong");
});

export { router as mainRouter };
