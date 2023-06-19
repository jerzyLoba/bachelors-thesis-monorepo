import { prodctsServiceClient } from "../../clients/products";
import { CartServiceHandlers } from "../../proto/inz/cart/CartService";
import { ExtendedProduct } from "../../proto/inz/products/ExtendedProduct";
import { Product } from "../../proto/inz/products/Product";
import { getCachedCart, updateCachedCart } from "../../utils/redis";

export const getCart: CartServiceHandlers["GetCart"] = async (
  call,
  callback
) => {
  try {
    const { user_id } = call.request;
    console.log("getCart:user_id: ", user_id);
    const cart = await getCachedCart(user_id);

    callback(null, { cart });
  } catch (e) {
    callback(e, null);
  }
};

export const addToCart: CartServiceHandlers["AddToCart"] = async (
  call,
  callback
) => {
  try {
    const { user_id, cart_id, product_id, quantity } = call.request;

    prodctsServiceClient.GetProductDetails(
      {
        product_id,
      },
      async (err, response) => {
        if (err) {
          console.log(err);
        }

        const { product } = response;

        if (quantity > product.quantity) {
          return callback(new Error("Product quantity exceeds stock"), null);
        }

        const cart = await getCachedCart(user_id);

        const productIndex =
          cart?.products?.findIndex(
            (item) => item?.product_id === product.product_id
          ) || -1;

        let updatedCart: Product[] = cart.products || [];

        if (productIndex === -1) {
          updatedCart.push({
            product_id: product.product_id,
            price: product.price,
            product_name: product.product_name,
            quantity: quantity,
          });
        } else {
          updatedCart = cart.products?.map((item) =>
            item.product_id === product.product_id
              ? { ...item, quantity: quantity }
              : item
          );
        }

        const res = await updateCachedCart(user_id, updatedCart);

        callback(null, { cart: res });
      }
    );
  } catch (e) {
    console.log("service-cart:addToCart:error", e);
    callback(e, null);
  }
};

export const removeFromCart: CartServiceHandlers["RemoveFromCart"] = async (
  call,
  callback
) => {
  console.log("service-cart: remove not implemented");
  try {
    const { user_id, cart_id, product_id, quantity } = call.request;

    const cart = await getCachedCart(user_id);

    const productIndex = cart.products.findIndex(
      (item) => item.product_id === product_id
    );

    if (productIndex === -1) {
      callback(null, { cart });
    } else {
      const productToUpdate = cart.products[productIndex];

      if (quantity >= productToUpdate.quantity) {
        const filteredProducts = cart.products.filter(
          (item) => item.product_id != product_id
        );

        const response = await updateCachedCart(user_id, filteredProducts);

        callback(null, { cart: response });
      } else {
        productToUpdate.quantity -= quantity;

        const response = await updateCachedCart(user_id, cart.products);

        callback(null, { cart: response });
      }
    }
  } catch (e) {
    console.log("service-cart:removeFromCart:error", e);
    callback(e, null);
  }
};
