import booksModel from "../../DB/Models/Books.model.js";

export async function createBook(bodyData) {
  const result = await booksModel.create(bodyData);
  console.log({ result });

  return result;
}

// export async function createBookIndex(bodyData) {
//   const result = await booksModel.createIndexes(bodyData);
//   console.log({ result });

//   return result;
// }

export async function insertBook(bodyData) {
  const result = await booksModel.insertOne(bodyData);
  console.log({ result });

  return result;
}

export async function insertManyBook(bodyData) {
  const result = await booksModel.insertMany(bodyData);
  console.log({ result });

  return result;
}

export async function updateBook(paramsData, bodyData) {
  // const {title} = paramsData
  const result = await booksModel.updateOne(paramsData, bodyData);
  console.log({ result });

  return result;
}

export async function getBook(queryData) {
  const result = await booksModel.findOne(queryData);
  console.log({ result });

  return result;
}

export async function getYearBook(queryData) {
  const from = Number(queryData.from);
  const to = Number(queryData.to);
  const result = await booksModel.find({
    year: { $gt: queryData.from, $lt: queryData.to },
  });
  console.log({ result });

  return result;
}

export async function getGenreBook(queryData) {
  const { genres } = queryData;
  const result = await booksModel.find({
    genres: { $in: [genres] },
  });
  console.log({ result });

  return result;
}

export async function skipLimitBook() {
  const result = await booksModel.find().sort({ year: -1 }).skip(2).limit(3);
  console.log({ result });

  return result;
}

export async function excludeGenresBook() {
  const result = await booksModel.find({
    genres: { $nin: ["Horror", "Science Fiction"] },
  });
  console.log({ result });

  return result;
}

export async function deleteBooks(queryData) {
  const year = Number(queryData.year);
  const result = await booksModel.deleteMany({
    year: { $lt: year },
  });
  console.log({ result });

  return result;
}

export async function aggregate1() {
  const result = await booksModel.aggregate([
    { $match: { year: { $gt: 2000 } } },
    { $sort: { year: -1 } },
  ]);
  console.log({ result });

  return result;
}

export async function aggregate2() {
  const result = await booksModel.aggregate([
    { $match: { year: { $gt: 2000 } } },
    { $project: { title: 1, author: 1, year: 1 } },
  ]);
  console.log({ result });

  return result;
}

export async function aggregate3() {
  const result = await booksModel.aggregate([{ $unwind: "$genres" }]);
  console.log({ result });

  return result;
}

