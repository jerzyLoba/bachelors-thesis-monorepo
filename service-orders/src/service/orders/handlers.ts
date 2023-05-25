import { cartServiceClient } from "../../clients/cart";
import { getUserOrdersQuery, placeOrderQuery } from "../../controllers/orders";
import { OrdersServiceHandlers } from "../../proto/inz/orders/OrdersService";

export const getUserOrders: OrdersServiceHandlers["GetUserOrders"] = async (
  call,
  callback
) => {
  try {
    const { user_id } = call.request;

    const res = await getUserOrdersQuery(user_id);

    callback(null, { user_id, orders: res });
  } catch (e) {
    console.log("service-orders:getUserOrders:error", e);
    callback(e, null);
  }
};
export const placeOrder: OrdersServiceHandlers["PlaceOrder"] = async (
  call,
  callback
) => {
  try {
    const { user_id, payment_method = "BANK_TRANSFER" } = call.request;

    cartServiceClient.getCart({ user_id }, async (err, response) => {
      if (err) {
        throw new Error("auth service bad");
      } else {
        const order = await placeOrderQuery({
          user_id,
          payment_method,
          cart: response.cart,
        });

        callback(null, { order });
      }
    });
  } catch (e) {
    console.log("service-orders:placeOrder:error", e);
    callback(e, null);
  }
};
