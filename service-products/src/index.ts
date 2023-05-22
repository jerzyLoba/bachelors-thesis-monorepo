import grpc from "@grpc/grpc-js";

import { createProductsServiceServer } from "./service";

function main() {
  const productServer = createProductsServiceServer();
  productServer.bindAsync(
    `0.0.0.0:50051`,
    grpc.ServerCredentials.createInsecure(),
    (error, port) => {
      if (error) {
        console.log(error);
      }
      console.log(`The server is listening on ${port} port`);
      productServer.start();
    }
  );
}

main();
