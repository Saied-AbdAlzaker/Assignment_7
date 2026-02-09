import mongoose from "mongoose";
import { type } from "os";

const logsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  action: {
    type: String,
    required: true,
  },
  bookId: { type: String },
});

const logsModel = mongoose.model("logs", logsSchema);

export default logsModel;
