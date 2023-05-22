export type UserRegisterRequest = {
  email?: string;
  password?: string;
  name?: string;
};

export type UserLoginRequest = {
  email?: string;
  password?: string;
};

export type AccessToken = {
  token: string;
};
