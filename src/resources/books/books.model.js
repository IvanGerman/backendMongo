const mongoose = require('mongoose');
const { addMethods } = require('../../utils/toResponse');
const Schema = mongoose.Schema;

const Book = new Schema(
  {
    name: String,
    title: {
      type: String,
      required: true,
      unique: true
    },
    price: {
      type: String,
      required: true,
      trim: true,
      minlength: 1
    }
  },
  { collection: 'books' }
);

addMethods(Book);

module.exports = mongoose.model('books', Book);
