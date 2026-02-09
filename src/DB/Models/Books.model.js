import mongoose from "mongoose";
import { type } from "os";

const bookSchema = new mongoose.Schema({
  // title_id: {
  //   type: String,
  //   required: true,
  // },
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  genres: { type: [String], required: true },
  year: Number,
});

const booksModel = mongoose.model("Books", bookSchema);

export default booksModel;
