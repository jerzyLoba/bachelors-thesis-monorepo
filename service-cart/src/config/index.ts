import * as dotenv from "dotenv";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "../../.env") });

export const getConfig = () => ({
  DB_HOST: process.env.DB_HOST,
  DB_PORT: Number(process.env.PORT) || 6379,
  DB_PASSWORD: process.env.DB_PASSWORD,
});
