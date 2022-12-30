import * as dotenv from "dotenv";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "../../.env") });

export const getConfig = () => ({
  DB_USER: process.env.DB_USER,
  DB_HOST: process.env.DB_HOST,
  DB_NAME: process.env.DB_NAME,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_PORT: Number(process.env.DB_PORT) || 5432,
  GRPC_USER_SERVICE_PORT: process.env.GRPC_USER_SERVICE_PORT,
  GRPC_AUTH_SERVICE_PORT: process.env.GPRC_AUTH_SERVICE_PORT,
});
