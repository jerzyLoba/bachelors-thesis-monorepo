import { RegisterRequest } from "../proto/inz/RegisterRequest";

type UserRole = "user" | "admin";

export type UserModel = RegisterRequest & {
  id: number;
  role: UserRole;
};
