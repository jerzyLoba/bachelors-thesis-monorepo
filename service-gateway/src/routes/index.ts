import express from "express";
import { userRouter } from "./user";
import { productsRouter } from "./products";

const router = express.Router();

router.use("/user", userRouter);
router.use("/products", productsRouter);

export { router as mainRouter };
