import express from "express";
import { collectDefaultMetrics, register } from "prom-client";
import { getConfig } from "../../config";

const config = getConfig();

collectDefaultMetrics();

const app = express();

app.get("/metrics", async (_req, res) => {
  try {
    res.set("Content-Type", register.contentType);
    res.end(await register.metrics());
  } catch (err) {
    res.status(500).end(err);
  }
});

export const bootstrapMetricsServer = () =>
  app.listen(config.METRICS_PORT, "0.0.0.0");
