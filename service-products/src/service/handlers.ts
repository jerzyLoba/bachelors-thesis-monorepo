import { ProductsServiceHandlers } from "../../types/proto/inz/ProductsService";
import {
  getProductDetailsQuery,
  getProductsQuery,
} from "../controllers/products";

export const getProducts: ProductsServiceHandlers["GetProducts"] = async (
  call,
  callback
) => {
  try {
    const { params } = call.request;

    const products = await getProductsQuery(params);
    callback(null, { products });
  } catch (e) {
    callback(e, null);
  }
};

export const getProductDetails: ProductsServiceHandlers["GetProductDetails"] =
  async (call, callback) => {
    try {
      const { product_id } = call.request;

      const product = await getProductDetailsQuery(product_id);
      callback(null, { product });
    } catch (e) {
      callback(e, null);
    }
  };
