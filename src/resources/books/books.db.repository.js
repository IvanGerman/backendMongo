const Book = require('./books.model');
const { NOT_FOUND_ERROR, ENTITY_EXISTS } = require('../../errors/appErrors');
const ENTITY_NAME = 'book';
const MONGO_ENTITY_EXISTS_ERROR_CODE = 11000;

const getBookByPrice = async email => {
  const book = await Book.findOne({ price });
  if (!book) {
    throw new NOT_FOUND_ERROR(ENTITY_NAME, { price });
  }

  return book;
};

const get = async title => {
  const book = await Book.findOne({ _id: title });
  if (!book) {
    throw new NOT_FOUND_ERROR(ENTITY_NAME, { title });
  }

  return book;
};

const save = async book => {
  try {
    return await Book.create(book);
  } catch (err) {
    if (err.code === MONGO_ENTITY_EXISTS_ERROR_CODE) {
      throw new ENTITY_EXISTS(`${ENTITY_NAME} with this title exists`);
    } else {
      throw err;
    }
  }
};

const update = async (title, book) =>
Book.findOneAndUpdate({ _id: title }, { $set: book }, { new: true })
const remove = async title => Book.deleteOne({ _id: title });

module.exports = { get, getBookByPrice, save, update, remove };
