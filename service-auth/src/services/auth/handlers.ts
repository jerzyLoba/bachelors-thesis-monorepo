import { AuthServiceHandlers } from "../../../types/proto/inz/AuthService";

export const generateToken: AuthServiceHandlers["GenerateToken"] = (
  call,
  callback
) => {
  try {
    console.log(`got generate token call for userId: ${call.request.user_id}`);
    callback(null, { access_token: "test" });
  } catch (e) {
    callback(e, null);
  }
};

export const validateToken: AuthServiceHandlers["ValidateToken"] = () => {
  console.log("auth service validate handler noop");
};
