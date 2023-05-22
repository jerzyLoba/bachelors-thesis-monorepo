import grpc from "@grpc/grpc-js";

import { createUsersServiceServer } from "./services";

function main() {
  const userServer = createUsersServiceServer();
  userServer.bindAsync(
    `0.0.0.0:50051`,
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
