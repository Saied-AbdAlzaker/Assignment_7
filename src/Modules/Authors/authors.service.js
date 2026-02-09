import authorModel from '../../DB/Models/Authors.model.js';

export async function createAuthor(bodyData) {

const result = await authorModel.insertOne(bodyData);
console.log({result});

return result;

}
