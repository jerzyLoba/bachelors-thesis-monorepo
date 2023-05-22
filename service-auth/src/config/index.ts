import * as dotenv from "dotenv";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "../../.env") });

export const getConfig = () => ({
  DB_PASSWORD: process.env.DB_PASSWORD,
  GRPC_USER_SERVICE_PORT: process.env.GRPC_USER_SERVICE_PORT,
  JWT_SECRET: process.env.JWT_SECRET,
  DB_HOST: process.env.DB_HOST,
  DB_PORT: Number(process.env.PORT) || 6379,
  METRICS_PORT: Number(process.env.METRICS_PORT),
});
