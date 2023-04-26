import * as express from "express";
import { v4 } from "uuid";
import { ReqWithCredentials } from "../types/cookie";

export const deviceIdentification = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const cookies = req.cookies as ReqWithCredentials;

  if (!cookies.dev_id) {
    const uuid = v4();
    res.cookie("dev_id", uuid, { httpOnly: true });
  }

  next();
};
