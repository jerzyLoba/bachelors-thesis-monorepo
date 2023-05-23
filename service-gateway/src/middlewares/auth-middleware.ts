import * as express from "express";
import { authServiceClient } from "../clients/auth";
import { ReqWithCredentials } from "../types/cookie";

export type AuthedRequest<
  P = any,
  ResBody = any,
  ReqBody = any
> = express.Request<P, ResBody, ReqBody & { user_id?: number }>;

export const authMiddleware = (
  req: AuthedRequest,
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
        if (err) {
          throw err;
        }

        if (!response.is_token_valid) {
          return res.status(403).send("not authed");
        }

        console.log(
          "service-auth: validate response from microservice ok",
          response
        );

        req.body.user_id = response.user_id;
        // res.cookie("token", response.access_token, { httpOnly: true });
      }
    );
    next();
  } catch (e) {
    console.log("service-gateway:authServiceClient:ValidateToken:error", e);
    return res.sendStatus(403);
  }
};
