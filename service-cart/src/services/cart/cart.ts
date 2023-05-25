import grpc from "@grpc/grpc-js";
import protoLoader from "@grpc/proto-loader";

import { ProtoGrpcType } from "../../proto/service";

import { fileURLToPath } from "url";
import { dirname } from "path";

import { CartServiceHandlers } from "../../proto/inz/cart/CartService";
import { addToCart, getCart, removeFromCart } from "./handlers";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PROTO_PATH = __dirname + "/../../../../proto/cart/service.proto";

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
  includeDirs: [__dirname + "/../../../proto"],
});

const {
  inz: {
    cart: { CartService },
  },
} = grpc.loadPackageDefinition(packageDefinition) as unknown as ProtoGrpcType;

export const createCartServiceServer = () => {
  const server = new grpc.Server();
  const handlers: CartServiceHandlers = {
    GetCart: getCart,
    AddToCart: addToCart,
    RemoveFromCart: removeFromCart,
  };

  server.addService(CartService.service, handlers);
  return server;
};
