import express from "express";
import * as booksService from "./books.service.js";

const booksRouter = express.Router();

booksRouter.get("/", (req, res) => res.send("Books Page."));
// 1-
booksRouter.post("/create", async (req, res) => {
  const result = await booksService.createBook(req.body);
  return res.status(201).json({ msg: "created", result });
});
// 4-
booksRouter.post("/index", async (req, res) => {
  const result = await booksService.createBookIndex(req.body);
  return res.status(201).json({ indexName: result });
});
// 5-
booksRouter.post("", async (req, res) => {
  const result = await booksService.insertBook(req.body);
  return res.status(201).json({ msg: "created", result });
});
// 6-
booksRouter.post("/batch", async (req, res) => {
  const result = await booksService.insertManyBook(req.body);
  return res.status(201).json({ msg: "created", result });
});
// 8-
booksRouter.patch("/:title", async (req, res) => {
  const result = await booksService.updateBook(req.params, req.body);
  return res.status(201).json({ msg: "created", result });
});
// 9-
booksRouter.get("/title", async (req, res) => {
  const result = await booksService.getBook(req.query);
  return res.status(201).json({ msg: "done", result });
});
// 10-
booksRouter.get("/year", async (req, res) => {
  const result = await booksService.getYearBook(req.query);
  return res.status(201).json({ msg: "done", result });
});
// 11-
booksRouter.get("/genre", async (req, res) => {
  const result = await booksService.getGenreBook(req.query);
  return res.status(201).json({ msg: "done", result });
});
// 12-
booksRouter.get("/skip-limit", async (req, res) => {
  const result = await booksService.skipLimitBook(req.body);
  return res.status(201).json({ msg: "done", result });
});
// 13-
booksRouter.get("/year-integer", async (req, res) => {
  const result = await booksService.yearIntBook(req.body);
  return res.status(201).json({ msg: "done", result });
});
// 14-
booksRouter.get("/exclude-genres", async (req, res) => {
  const result = await booksService.excludeGenresBook(req.body);
  return res.status(201).json({ msg: "done", result });
});
// 15-
booksRouter.delete("/before-year", async (req, res) => {
  const result = await booksService.deleteBooks(req.query);
  return res.status(201).json({ msg: "done", result });
});
// 16-
booksRouter.get("/aggregate1", async (req, res) => {
  const result = await booksService.aggregate1(req.body);
  return res.status(201).json({ msg: "done", result });
});
// 17-
booksRouter.get("/aggregate2", async (req, res) => {
  const result = await booksService.aggregate2(req.body);
  return res.status(201).json({ msg: "done", result });
});
// 18-
booksRouter.get("/aggregate3", async (req, res) => {
  const result = await booksService.aggregate3(req.body);
  return res.status(201).json({ msg: "done", result });
});


export default booksRouter;
