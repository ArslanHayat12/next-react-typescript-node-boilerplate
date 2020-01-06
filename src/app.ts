import bodyParser from "body-parser";
import express from "express";
import helmet from "helmet";
import { development } from "./config";
import { logger } from "./utils";
import { user } from "./routes/user";
import { task } from "./routes/task";

const app = express();

// Use helmet to secure Express with various HTTP headers
app.use(helmet());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// express-winston logger
app.use(logger());

app.use("/app1", user);
app.use("/app2", task);

// express-winston errorLogger .
app.use(logger());

app.get("/", (req, res) => res.send("Hit /user or /task"));

app.listen(development.port, () => {
  console.log(`server started at http://${development.host}:${development.port}`);
});
