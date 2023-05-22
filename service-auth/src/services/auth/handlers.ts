import jwt from "jsonwebtoken";

import { AuthServiceHandlers } from "../../proto/inz/auth/AuthService";
import { JWTInterface, signToken } from "../../utils/jwt";
import { getUserToken, setUserToken } from "../../utils/redis";
import { getConfig } from "../../config";

const { JWT_SECRET } = getConfig();

export const generateToken: AuthServiceHandlers["GenerateToken"] = async (
  call,
  callback
) => {
  try {
    const { role, user_id, device_id } = call.request;
    console.log(device_id);
    console.log(`got generate token call for userId: ${call.request.user_id}`);

    if (role !== "admin" && role !== "user") {
      throw new Error("invalid user role");
    }

    if (!device_id) {
      throw new Error("no device id");
    }

    const access_token = signToken({ user_id, role });

    await setUserToken(user_id, device_id, access_token);
    callback(null, { access_token });
  } catch (e) {
    console.log("service-auth:generateToken:error", e);
    callback(e, null);
  }
};

export const validateToken: AuthServiceHandlers["ValidateToken"] = async (
  call,
  callback
) => {
  try {
    const { access_token, device_id } = call.request;

    let id: string | undefined;

    jwt.verify(access_token, JWT_SECRET, (err, decoded) => {
      if (err) {
        throw new Error("Could not decode");
      }

      id = (decoded as JWTInterface).user_id;
    });

    const cachedToken = await getUserToken(id, device_id);

    // if (!cachedToken) {
    //   throw new Error("token not cached in redis");
    // }

    console.log({ jwt_payload_resolve: cachedToken });
    callback(null, { is_token_valid: !!cachedToken, user_id: id });
  } catch (e) {
    console.log("service-auth:validateToken:error", e);
    callback(e, null);
  }
};

export const invalidateToken: AuthServiceHandlers["InavlidateToken"] = async (
  call,
  callback
) => {
  try {
    console.log("invalidate token not implemented");
  } catch (e) {}
};
