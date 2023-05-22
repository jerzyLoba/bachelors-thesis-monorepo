import { client } from "../config/redis";
import { Cart } from "../proto/inz/cart/Cart";

export const setCachedCart = async (id: number, value: string) =>
  await client.json.set(`user:${id}:cart`, "$", value);

export const updateCachedCart = async (
  id: number,
  value: Partial<Cart["products"]>
) => {
  await client
    .multi()
    //@ts-ignore
    .json.set(`user:${id}:cart`, "$.products", value)
    .json.set(`user:${id}:cart`, "$.updated_at", Date.now())
    .exec();

  return await getCachedCart(id);
};

export const getCachedCart = async (id: number) =>
  await (client.json.get(`user:${id}:cart`) as Promise<Cart>);
