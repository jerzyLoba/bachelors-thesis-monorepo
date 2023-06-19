import * as express from "express";
import { authServiceClient } from "../clients/auth";
import { ReqWithCredentials } from "../types/cookie";

export const authMiddleware = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const cookies = req.cookies as ReqWithCredentials;

    if (!cookies.token) {
      return res.status(400).send("Invalid request");
    }

    authServiceClient.ValidateToken(
      { access_token: cookies.token, device_id: cookies.dev_id },
      (err, response) => {
        console.log("authMiddleWare:authServiceClient: ", response);
        if (err) {
          console.log(err);
        }

        if (!response.is_token_valid) {
          return res.status(403).send("not authed");
        }

        console.log(
          "service-auth: validate response from microservice ok",
          response
        );

        req.user_id = response.user_id;

        next();
      }
    );
  } catch (e) {
    console.log("service-gateway:authServiceClient:ValidateToken:error", e);
    return res.sendStatus(403);
  }
};
