import express from "express";
import { prodctsServiceClient } from "../clients/products";
import { ProductParams, ProductQueryParams } from "../../types/products";

const router = express.Router();

router.get<{}, {}, {}, ProductQueryParams>("/", (req, res) => {
  try {
    const { query } = req;

    prodctsServiceClient.GetProducts(
      {
        params: {
          category_name: query.category,
          brand_name: query.brand,
        },
      },
      (err, response) => {
        if (err) {
          console.log(err);
          return res.status(500).send("Internal server error");
        }
        console.log("service-products: get product from microservice ok");
        console.log(response);

        return res.status(200).send(response.products);
      }
    );
  } catch (e) {
    return res.sendStatus(500).send("Internal server error");
  }
});

router.get<ProductParams>("/:id", (req, res) => {
  try {
    const { params } = req;

    const parsedId = parseInt(params.id, 10);

    if (isNaN(parsedId)) {
      return res.status(400).send("wrong product id");
    }

    prodctsServiceClient.GetProductDetails(
      {
        product_id: parsedId,
      },
      (err, response) => {
        if (err) {
          console.log(err);
          return res.status(500).send("Internal server error");
        }
        console.log(
          "service-products: get product details from microservice ok"
        );
        console.log(response);

        return res.status(200).send(response.product);
      }
    );
  } catch (e) {
    return res.status(500).send("Internal server error");
  }
});

export { router as productsRouter };
