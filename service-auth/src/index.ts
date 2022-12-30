import grpc from "@grpc/grpc-js";

import { getConfig } from "./config";
import { getAuthServiceServer } from "./services/auth/auth";

function main() {
  const authServer = getAuthServiceServer();
  authServer.bindAsync(
    `0.0.0.0:${getConfig().GRPC_USER_SERVICE_PORT}`,
    grpc.ServerCredentials.createInsecure(),
    (error, port) => {
      if (error) {
        console.log(error);
      }
      console.log(`The server is listening on ${port} port`);
      authServer.start();
    }
  );
}

main();
