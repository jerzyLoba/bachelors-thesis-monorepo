import { createClient } from "redis";
import { getConfig } from ".";

const config = getConfig();

export const client = createClient({
  url: `redis://${config.DB_HOST}:${config.DB_PORT}`,
  password: config.DB_PASSWORD,
});
client.on("connect", () => console.log("redis connected"));
client.on("error", (err) =>
  console.log(`redis client error on ${config.DB_HOST}:${config.DB_PORT}`, err)
);

await client.connect();
