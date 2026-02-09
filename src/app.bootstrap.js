import express from "express";
import authRouter from "./Modules/Auth/auth.controller.js";
import booksRouter from "./Modules/Books/books.controller.js";
import authorsRouter from "./Modules/Authors/authors.controller.js";
import logsRouter from './Modules/Logs/logs.controller.js';

import { SERVER_PORT, NODE_ENV } from "../config/config.service.js";
import testDbConnection from "./DB/connection.js";

async function bootstrap() {
  const app = express();
  const port = SERVER_PORT;
  app.use(express.json());

  await testDbConnection();

  app.use("/auth", authRouter);
  app.use("/books", booksRouter);
  app.use("/authors", authorsRouter);
  app.use("/logs", logsRouter);

  app.use((error, req, res, next) => {
    return NODE_ENV == "dev"
      ? res
          .status(error.cause?.statusCode ?? 500)
          .json({ errMsg: error.message, error, stack: error.stack })
      : res
          .status(error.cause?.statusCode ?? 500)
          .json({ errMsg: error.message || "Something went wrong." });
  });

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

export default bootstrap;
