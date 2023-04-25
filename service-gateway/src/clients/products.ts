import grpc from "@grpc/grpc-js";
import protoLoader from "@grpc/proto-loader";

import { fileURLToPath } from "url";
import { dirname } from "path";
import { ProtoGrpcType } from "../proto/service";

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

const { inz } = grpc.loadPackageDefinition(
  packageDefinition
) as unknown as ProtoGrpcType;

export const prodctsServiceClient = new inz.ProductsService(
  "service-products:50051",
  grpc.credentials.createInsecure()
);
