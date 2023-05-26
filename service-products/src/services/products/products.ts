import grpc from "@grpc/grpc-js";
import protoLoader from "@grpc/proto-loader";

import { fileURLToPath } from "url";
import { dirname } from "path";

import { ProductsServiceHandlers } from "../../proto/inz/products/ProductsService";
import { ProtoGrpcType } from "../../proto/service";
import { getProductDetails, getProducts } from "./handlers";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PROTO_PATH = __dirname + "/../../../../proto/products/service.proto";

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const {
  inz: {
    products: { ProductsService },
  },
} = grpc.loadPackageDefinition(packageDefinition) as unknown as ProtoGrpcType;

export const createProductsServiceServer = () => {
  const server = new grpc.Server();
  const handlers: ProductsServiceHandlers = {
    GetProductDetails: getProductDetails,
    GetProducts: getProducts,
    DecreaseProductQuantity: (_call, _callback) => {
      console.log("service-products:descreaseProductQuantity not implemented");
    },
  };

  server.addService(ProductsService.service, handlers);
  return server;
};
