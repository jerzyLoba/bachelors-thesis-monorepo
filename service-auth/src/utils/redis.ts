import { client } from "../config/redis";

export const setUserToken = async (
  id: string,
  device_id: string,
  value: string
) =>
  await client.set(`user:${id}+${device_id}:jwt`, value, {
    EX: 86400,
  });

export const getUserToken = async (id: string, device_id: string) =>
  await client.get(`user:${id}+${device_id}:jwt`);
