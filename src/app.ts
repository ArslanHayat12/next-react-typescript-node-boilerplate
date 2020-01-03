import express from "express";
import { config } from "dotenv";
import bodyParser from "body-parser";
import expressWinston from "express-winston";
import winston from "winston";
import Routes from "./routes";
import helmet from "helmet";

const app = express();

// Use helmet to secure Express with various HTTP headers
app.use(helmet());

//Read .env file
const env = config().parsed;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// express-winston logger makes sense BEFORE the router
app.use(
  expressWinston.logger({
    transports: [new winston.transports.Console()],
    format: winston.format.combine(winston.format.colorize(), winston.format.json())
  })
);

app.use("/", Routes);

// express-winston errorLogger makes sense AFTER the router.
app.use(
  expressWinston.errorLogger({
    transports: [new winston.transports.Console()],
    format: winston.format.combine(winston.format.colorize(), winston.format.json())
  })
);

app.get("/", (req, res) => res.send("Hit /user or /task"));

app.listen(env.PORT, () => {
  console.log(`server started at http://${env.HOST}:${env.PORT}`);
});
