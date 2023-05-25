import jwt, { JwtPayload, VerifyCallback } from "jsonwebtoken";
import { getConfig } from "../config";

const { JWT_SECRET } = getConfig();

type JWTPayload = {
  user_id: number;
  role: "user" | "admin";
};

export type JWTInterface = {
  iat: number;
  exp: number;
} & JWTPayload;

type JWTValidationError = {
  valid: boolean;
};

type JWTUtilSign = (payload: JWTPayload) => string;

type JWTUtilVerify = (payload: string) => string | JWTPayload;

export const signToken: JWTUtilSign = ({ user_id, role }) =>
  jwt.sign({ user_id, role }, JWT_SECRET, { expiresIn: "12h" });

export const verifyToken: JWTUtilVerify = (token) =>
  jwt.verify(token, JWT_SECRET) as JWTPayload;
