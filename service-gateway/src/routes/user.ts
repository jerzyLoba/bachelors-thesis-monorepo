import express from "express";
import { UserRegisterRequest } from "../models/user";
import { usersServiceClient } from "../clients/user";

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

      console.log("response from microservice ok");
      console.log(response);

      res.cookie("token", response.access_token, { httpOnly: true });

      return res.status(200).send("registered");
    });
  } catch (e) {
    return res.status(500).send("Internal server error");
  }
});

router.post("/login", (req, res) => {
  console.log(req);

  res.status(200).send("login");
});

export { router as userRouter };
