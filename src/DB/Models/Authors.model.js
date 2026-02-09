import mongoose from "mongoose";

const authorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    nationality: {
      type: String,
      required: true,
    }
  }
);

const authorModel = mongoose.model("Authors", authorSchema);

export default authorModel;
