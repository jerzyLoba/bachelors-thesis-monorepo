import grpc from "@grpc/grpc-js";
import protoLoader from "@grpc/proto-loader";

import { ProtoGrpcType } from "../../proto/service";

import { fileURLToPath } from "url";
import { dirname } from "path";

import { AuthServiceHandlers } from "../../proto/inz/AuthService";
import { generateToken, invalidateToken, validateToken } from "./handlers";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PROTO_PATH = __dirname + "/../../../../proto/auth/service.proto";

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

export const createAuthServiceServer = () => {
  const server = new grpc.Server();
  const handlers: AuthServiceHandlers = {
    GenerateToken: generateToken,
    ValidateToken: validateToken,
    InavlidateToken: invalidateToken,
  };

  server.addService(inz.AuthService.service, handlers);
  return server;
};
