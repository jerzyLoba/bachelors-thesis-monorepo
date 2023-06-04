import grpc from "@grpc/grpc-js";

import { bootstrapMetricsServer, createOrdersServiceServer } from "./service";

function main() {
  bootstrapMetricsServer();
  const ordersServer = createOrdersServiceServer();
  ordersServer.bindAsync(
    `0.0.0.0:50051`,
    grpc.ServerCredentials.createInsecure(),
    (error, port) => {
      if (error) {
        console.log(error);
      }
      console.log(`The server is listening on ${port} port`);
      ordersServer.start();
    }
  );
}

main();
