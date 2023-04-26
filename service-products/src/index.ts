import grpc from "@grpc/grpc-js";

import { getConfig } from "./config";
import { getProductsServiceServer } from "./service";

function main() {
  const userServer = getProductsServiceServer();
  userServer.bindAsync(
    `0.0.0.0:${getConfig().GRPC_PRODUCT_SERVICE_PORT}`,
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
