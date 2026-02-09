import logsModel from "../../DB/Models/logs.model.js";

export async function createLogs(bodyData) {
  const result = await logsModel.insertMany(bodyData, { limit: "1mb" });
  console.log({ result });

  return result;
}

export async function insertBlog(bodyData) {
  const result = await logsModel.insertOne({
    title: bodyData.title,
    description: bodyData.description,
    bookId: ObjectId.createFromHexString(bodyData.bookId),
    bodyData,
  });
  console.log({ result });

  return result;
}

export async function aggregate4(bodyData) {
  const result = await logsModel.aggregate([
    {
      $lookup: {
        from: "logs",
        localField: "_id",
        foreignField: "bookId",
        as: "logs",
      },
    },
    {
      $project: {
        action: 1,
      },
    },
  ]);
  console.log({ result });

  return result;
}
