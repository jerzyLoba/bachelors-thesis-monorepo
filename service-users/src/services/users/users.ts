import grpc from "@grpc/grpc-js";
import protoLoader from "@grpc/proto-loader";

import { fileURLToPath } from "url";
import { dirname } from "path";

import { UsersServiceHandlers } from "../../proto/inz/UsersService";
import { ProtoGrpcType } from "../../proto/service";
import { login, register } from "./handlers";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PROTO_PATH = __dirname + "/../../../../proto/users/service.proto";

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const {
  inz: { UsersService },
} = grpc.loadPackageDefinition(packageDefinition) as unknown as ProtoGrpcType;

export const createUsersServiceServer = () => {
  const server = new grpc.Server();
  const handlers: UsersServiceHandlers = {
    Register: register,
    Login: login,
    GetUserId: () => {
      console.log("not implemented");
    },
  };

  server.addService(UsersService.service, handlers);
  return server;
};
