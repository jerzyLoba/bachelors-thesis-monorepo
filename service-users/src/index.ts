import grpc from "@grpc/grpc-js";

import { bootstrapMetricsServer, createUsersServiceServer } from "./services";

function main() {
  bootstrapMetricsServer();
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
