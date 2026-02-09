import express from "express";
import * as authService from "./auth.service.js";

const authRouter = express.Router();

authRouter.get("/", (req, res) => res.send("Auth Page."));

export default authRouter;
