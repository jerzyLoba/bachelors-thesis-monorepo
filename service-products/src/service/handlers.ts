import { ProductsServiceHandlers } from "../proto/inz/products/ProductsService";
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
    console.log("service-products:getProducts:error", e);
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
      console.log("service-products:getProductDetails:error", e);
      callback(e, null);
    }
  };
