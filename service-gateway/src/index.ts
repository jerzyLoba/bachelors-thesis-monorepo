import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

import { mainRouter } from "./routes";

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(mainRouter);

app.listen(port, () => {
  console.log(`Server running on ${port} port`);
});
