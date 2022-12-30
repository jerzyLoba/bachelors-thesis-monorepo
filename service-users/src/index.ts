import grpc from "@grpc/grpc-js";

import { getConfig } from "./config";
import { getUsersServiceServer } from "./services/users/users";

function main() {
  const userServer = getUsersServiceServer();
  userServer.bindAsync(
    `0.0.0.0:${getConfig().GRPC_USER_SERVICE_PORT}`,
    grpc.ServerCredentials.createInsecure(),
    (error, port) => {
      if (error) {
        console.log(error);
      }
      console.log(`The server is listening on ${port} port`);
      userServer.start();
    }
  );
}

main();
