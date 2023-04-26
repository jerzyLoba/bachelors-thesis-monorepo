import { ExtendedProduct } from "../proto/inz/ExtendedProduct";
import { GetProductDetailsRequest } from "../proto/inz/GetProductDetailsRequest";
import { Product } from "../proto/inz/Product";
import { ProductParamsRequest } from "../proto/inz/ProductParamsRequest";
import { pool } from "../db/connection";

export const getProductsQuery = async ({
  category_name,
  brand_name,
}: ProductParamsRequest) => {
  const res = await pool.query<Product>(
    `SELECT products.product_id, products.product_name, product_inventory.price, product_inventory.quantity
    FROM products 
    INNER JOIN product_inventory ON products.product_id=product_inventory.product_id 
    JOIN brands ON products.brand_id=brands.brand_id 
    JOIN categories ON products.category_id=categories.category_id
    WHERE (NULLIF($1::text, '') is null or category_name = $1::text) and (NULLIF($2::text, '') is null or brand_name = $2::text)`,
    [category_name, brand_name]
  );

  return res.rows;
};

export const getProductDetailsQuery = async (
  id: GetProductDetailsRequest["product_id"]
) => {
  const res = await pool.query<ExtendedProduct>(
    `SELECT products.product_id, products.product_name, products.brand_id, products.category_id, product_inventory.price, product_inventory.quantity
    FROM products 
    INNER JOIN product_inventory ON products.product_id=product_inventory.product_id 
    WHERE products.product_id = $1`,
    [id]
  );

  return res.rows[0];
};
