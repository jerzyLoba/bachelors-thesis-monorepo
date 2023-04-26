// import grpc from "@grpc/grpc-js";
// import protoLoader from "@grpc/proto-loader";

// import { fileURLToPath } from "url";
// import { dirname } from "path";
// import { ProtoGrpcType } from "../types/proto/service";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const PROTO_PATH = __dirname + "/../../proto/users/service.proto";

// const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
//   keepCase: true,
//   longs: String,
//   enums: String,
//   defaults: true,
//   oneofs: true,
// });

// const { inz } = grpc.loadPackageDefinition(
//   packageDefinition
// ) as unknown as ProtoGrpcType;

// const client = new inz.UsersService(
//   "localhost:50051",
//   grpc.credentials.createInsecure()
// );

// client.login({ email: "test", password: "test" }, (err, response) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("response here");
//   console.log(response);
// });
