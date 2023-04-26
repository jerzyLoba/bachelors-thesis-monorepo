import { UsersServiceHandlers } from "../../proto/inz/UsersService";
import { authServiceClient } from "../../clients/auth";
import {
  createUser,
  getUserCredentialsWithPermissions,
} from "../../controllers/user";
import { comparePassword, securePassword } from "../../utils/password";

export const register: UsersServiceHandlers["Register"] = async (
  call,
  callback
) => {
  try {
    const { name, email, password } = call.request;
    const hashedPassword = await securePassword(password);

    const userId = await createUser({
      name,
      email,
      password: hashedPassword,
    });

    authServiceClient.GenerateToken(
      { user_id: String(userId) },
      (err, response) => {
        if (err) {
          throw new Error("auth service bad");
        } else {
          console.log("sending request to auth service");
          callback(null, { access_token: response.access_token });
        }
      }
    );
  } catch (e) {
    callback(e, null);
  }
};

export const login: UsersServiceHandlers["Login"] = async (call, callback) => {
  try {
    const { email, password, device_id } = call.request;

    const { userId, hashedPassword, role } =
      await getUserCredentialsWithPermissions(email);

    if (!comparePassword(password, hashedPassword)) {
      throw new Error("passwords doesnt match");
    }
    console.log("service users, device id", device_id);
    authServiceClient.GenerateToken(
      { user_id: String(userId), device_id, role },
      (err, response) => {
        if (err) {
          console.log(err);
          throw new Error("auth service bad");
        } else {
          console.log("sending request to auth service");
          callback(null, { access_token: response.access_token });
        }
      }
    );
  } catch (e) {
    callback(e, null);
  }
};
