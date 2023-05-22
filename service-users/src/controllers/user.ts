import { LoginRequest } from "../proto/inz/users/LoginRequest";
import { RegisterRequest } from "../proto/inz/users/RegisterRequest";
import { pool } from "../db/connection";
import { UserModel } from "../models/user";

export const getUserId = async (email: Required<LoginRequest["email"]>) => {
  const res = await pool.query<Pick<UserModel, "id">>(
    "SELECT id FROM users WHERE email = $1",
    [email]
  );

  return res.rows[0].id;
};

export const getUserCredentialsWithPermissions = async (
  email: Required<LoginRequest["email"]>
) => {
  const res = await pool.query<Pick<UserModel, "id" | "password" | "role">>(
    "SELECT id, password, role FROM users WHERE email = $1",
    [email]
  );

  const { id, password, role } = res.rows[0];

  return {
    userId: id,
    hashedPassword: password,
    role,
  };
};

export const createUser = async (user: Required<RegisterRequest>) => {
  const res = await pool.query<Pick<UserModel, "id">>(
    "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id;",
    [user.name, user.email, user.password]
  );

  return res.rows[0].id;
};
