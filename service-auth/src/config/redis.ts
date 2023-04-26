import { createClient } from "redis";

export const client = createClient({
  url: "redis://localhost:6379",
});
client.on("connect", () => console.log("redis connected"));
client.on("error", (err) => console.log("redis client error", err));

await client.connect();
