import grpc from "@grpc/grpc-js";

import { createCartServiceServer } from "./services";

function main() {
  const authServer = createCartServiceServer();
  authServer.bindAsync(
    `0.0.0.0:50051`,
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
