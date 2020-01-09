import bodyParser from "body-parser";
import express from "express";
import next from "next";
import helmet from "helmet";
import { development } from "./server/config";
import { logger } from "./server/utils";
import { user } from "./server/controllers/user";
import { task } from "./server/controllers/task";

async function start() {
  const dev = process.env.NODE_ENV !== "production";
  const nextApp = next({ dev });
  const app = express();
  await nextApp.prepare();
  const handle = nextApp.getRequestHandler();

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

  //If we refresh page with route tasks/1 it will render else 404
  //Just for checking we can remove it
  app.get("/tasks/1", (req, res) => {
    return nextApp.render(req, res, "/");
  });

  app.all("*", (req, res) => {
    return handle(req, res);
  });

  app.listen(development.port, () => {
    console.log(`server started at http://${development.host}:${development.port}`);
  });
  return app;
}
export const app = start();
