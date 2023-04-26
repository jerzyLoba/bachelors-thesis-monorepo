import express from "express";
import { UserLoginRequest, UserRegisterRequest } from "../models/user";
import { usersServiceClient } from "../clients/user";
import { authServiceClient } from "../clients/auth";
import { ReqWithCredentials, ReqWithDeviceId } from "../types/cookie";

const router = express.Router();

router.post<{}, {}, UserRegisterRequest>("/register", (req, res) => {
  try {
    const {
      body: { email, password, name },
    } = req;
    if (!email || !password || !name) {
      return res.status(400).send("Invalid request");
    }

    usersServiceClient.Register({ email, password, name }, (err, response) => {
      if (err) {
        console.log(err);
        return res.status(500).send("Internal server error");
      }

      console.log("service-users: register response from microservice ok");
      console.log(response);

      res.cookie("token", response.access_token, { httpOnly: true });

      return res.status(200).send("registered");
    });
  } catch (e) {
    return res.status(500).send("Internal server error");
  }
});

router.post<{}, {}, UserLoginRequest>("/login", (req, res) => {
  try {
    const {
      body: { email, password },
    } = req;
    const { dev_id: device_id } = req.cookies as ReqWithDeviceId;

    console.log(req.cookies);
    if (!email || !password) {
      return res.status(400).send("Invalid request");
    }

    if (!device_id) {
      throw new Error("no device id");
    }

    usersServiceClient.Login(
      { email, device_id, password },
      (err, response) => {
        if (err) {
          console.log(err);
          return res.status(500).send("Internal server error");
        }

        console.log("service-users: login response from microservice ok");
        console.log(response);

        res.cookie("token", response.access_token, { httpOnly: true });

        return res.status(200).send("logged in");
      }
    );
  } catch (e) {
    return res.status(500).send("Internal server error");
  }
});

router.get("/validate", (req, res) => {
  try {
    const cookies = req.cookies as ReqWithCredentials;
    console.log(cookies);

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

        console.log("service-auth: validate response from microservice ok");
        console.log(response);

        // res.cookie("token", response.access_token, { httpOnly: true });

        return res.status(200).send("valid");
      }
    );
  } catch (e) {
    return res.status(500).send("Internal server error");
  }
});

export { router as userRouter };
