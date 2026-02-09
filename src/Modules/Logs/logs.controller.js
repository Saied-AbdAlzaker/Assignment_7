import express from "express";
import * as logsService from "./logs.service.js";

const logsRouter = express.Router();
// 3-
logsRouter.post("/capped", async (req, res) => {
  const result = await logsService.createLogs(req.body);
  return res.status(201).json({ msg: "created", result });
});

// 7-
logsRouter.post("", async (req, res) => {
  const result = await logsService.insertBlog(req.body);
  return res.status(201).json({ msg: "created", result });
});

// 19-
logsRouter.get("/aggregate4", async (req, res) => {
  const result = await logsService.aggregate4(req.body);
  return res.status(201).json({ msg: "done", result });
});

export default logsRouter;
