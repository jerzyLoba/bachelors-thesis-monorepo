import grpc from "@grpc/grpc-js";

import { createOrdersServiceServer } from "./service";

function main() {
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
