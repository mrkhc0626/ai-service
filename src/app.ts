import express from "express";
import cors from "cors";
import "reflect-metadata";
import * as bodyParser from "body-parser";
import * as Controllers from "./controllers";
import * as Configs from "./config";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
const port = Configs.generalConfig.port;

// API Routes
app.get("/", (_, res) => {
  res.send("Hello World! Server is up.");
});

// Health
app.get("/health", Controllers.getHealth);

// Start A.I. service
app.post("/start", Controllers.startAI);

app.listen(port, () => {
  console.log(`server is listening on ${port}`);
  return;
});

export default app;
