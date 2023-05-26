import grpc from "@grpc/grpc-js";

import { bootstrapMetricsServer, createAuthServiceServer } from "./services";

function main() {
  bootstrapMetricsServer();
  const authServer = createAuthServiceServer();
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
