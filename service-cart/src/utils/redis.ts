import { client } from "../config/redis";
import { Cart } from "../proto/inz/cart/Cart";

export const setCachedCart = async (id: number, value: string) =>
  await client.json.set(`user:${id}:cart`, ".", value);

export const updateCachedCart = async (
  id: number,
  value: Partial<Cart["products"]>
) => {
  const key = `user:${id}:cart`;

  const exists = await client.exists(key);

  if (!exists) {
    await client.json.set(key, ".", {});
  }

  await client
    .multi()
    //@ts-ignore
    .json.set(key, ".products", value)
    .json.set(key, ".updated_at", Date.now())
    .exec();

  return await getCachedCart(id);
};

export const getCachedCart = async (id: number) => {
  const key = `user:${id}:cart`;
  const exists = await client.exists(key);

  if (!exists) {
    return {};
  }

  return await (client.json.get(key) as Promise<Cart>);
};
