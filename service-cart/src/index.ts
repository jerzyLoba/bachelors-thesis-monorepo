import grpc from "@grpc/grpc-js";

import { bootstrapMetricsServer, createCartServiceServer } from "./services";

function main() {
  bootstrapMetricsServer();
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
