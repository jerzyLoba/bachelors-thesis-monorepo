import grpc from "@grpc/grpc-js";
import protoLoader from "@grpc/proto-loader";

import { fileURLToPath } from "url";
import { dirname } from "path";

import { ProductsServiceHandlers } from "../../types/proto/inz/ProductsService";
import { ProtoGrpcType } from "../../types/proto/service";
import { getProductDetails, getProducts } from "./handlers";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PROTO_PATH = __dirname + "/../../../proto/products/service.proto";

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const {
  inz: { ProductsService },
} = grpc.loadPackageDefinition(packageDefinition) as unknown as ProtoGrpcType;

export const getProductsServiceServer = () => {
  const server = new grpc.Server();
  const handlers: ProductsServiceHandlers = {
    GetProductDetails: getProductDetails,
    GetProducts: getProducts,
  };

  server.addService(ProductsService.service, handlers);
  return server;
};
