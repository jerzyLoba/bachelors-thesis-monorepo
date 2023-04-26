export type ReqWithToken = {
  token?: string;
};

export type ReqWithDeviceId = {
  dev_id?: string;
};

export type ReqWithCredentials = ReqWithToken & ReqWithDeviceId;
