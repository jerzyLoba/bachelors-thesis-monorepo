import { createClient } from "redis";
import { getConfig } from ".";
// TODO change to k8s dns resolved host

const config = getConfig();

export const client = createClient({
  url: `redis://${config.DB_HOST}:${config.DB_PORT}`,
});
client.on("connect", () => console.log("redis connected"));
client.on("error", (err) => console.log("redis client error", err));

await client.connect();