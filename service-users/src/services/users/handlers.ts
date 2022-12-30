import { UsersServiceHandlers } from "../../../types/proto/inz/UsersService";
import { authServiceClient } from "../../clients/auth";
import { getUserId } from "../../controllers/user";

export const register: UsersServiceHandlers["Register"] = (call, callback) => {
  try {
    const user_id = getUserId();
    authServiceClient.GenerateToken({ user_id }, (err, response) => {
      if (err) {
        throw Error("auth service bad");
      } else {
        console.log("sending request to auth service");
        callback(null, { access_token: response.access_token });
      }
    });
  } catch (e) {
    callback(e, null);
  }
};

export const login: UsersServiceHandlers["Login"] = (call, callback) => {
  console.log("users service login handler noop");
};
