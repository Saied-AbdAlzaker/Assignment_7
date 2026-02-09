import express from "express";
import * as authorsService from "./authors.service.js";

const authorsRouter = express.Router();

authorsRouter.get("/", (req, res) => res.send("Books Page."));
// 2-
authorsRouter.post("/create", async (req, res) => {
  const result = await authorsService.createAuthor(req.body);
  return res.status(201).json({ msg: "created", result });
});

export default authorsRouter;
