import * as express from "express";
import { authServiceClient } from "../clients/auth";
import { ReqWithCredentials } from "../types/cookie";

export interface AuthRequest<T = any> extends express.Request<{}, {}, T> {
  user_id?: string;
}

export const authMiddleware = (
  req: AuthRequest,
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
          console.log(err);
          return res.status(500).send("Internal server error");
        }

        if (!response.is_token_valid) {
          return res.status(403).send("not authed");
        }

        console.log(
          "service-auth: validate response from microservice ok",
          response
        );

        req.user_id = response.user_id;
        // res.cookie("token", response.access_token, { httpOnly: true });
      }
    );
    next();
  } catch (e) {
    throw new Error("not authenticated");
  }
};
