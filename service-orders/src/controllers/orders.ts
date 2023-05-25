import { pool } from "../db/connection";
import { Order } from "../proto/inz/orders/Order";
import { GetUserOrdersRequest } from "../proto/inz/orders/GetUserOrdersRequest";
import { PlaceOrderRequest } from "../proto/inz/orders/PlaceOrderRequest";
import { Cart } from "../proto/inz/cart/Cart";

export const getUserOrdersQuery = async (
  id: GetUserOrdersRequest["user_id"]
) => {
  const res = await pool.query<Order>(
    `SELECT order.order_id, order.order_status, order.created_at 
    FROM orders
    INNER JOIN order_item ON order.order_id=order_item.order_id
    WHERE order.user_id=$1`,
    [id]
  );

  return res.rows;
};

export const placeOrderQuery = async ({
  cart,
  user_id,
  payment_method,
}: PlaceOrderRequest & { cart: Cart }) => {
  const client = await pool.connect();
  try {
    await client.query("BEGIN");

    const orderRes = await client.query<Order>(
      `INSERT INTO orders(user_id, payment_method, created_at) VALUES ($1, $2, to_timestamp(${Date.now()} / 1000.0)) RETURNING *`,
      [user_id, payment_method]
    );

    for (const product of cart.products) {
      await client.query(
        "INSERT INTO order_item(order_id, product_id, quantity, price) VALUES ($1, $2, $3, $4)",
        [
          orderRes.rows[0].order_id,
          product.product_id,
          product.quantity,
          product.price,
        ]
      );
    }

    await client.query("COMMIT");

    return orderRes.rows[0];
  } catch (e) {
    await client.query("ROLLBACK");
    throw e;
  } finally {
    client.release();
  }
};
