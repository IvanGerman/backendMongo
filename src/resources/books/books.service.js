const booksRepo = require('./books.db.repository');
const statisticService = require('../statistics/statistic.service');
const settingsService = require('../settings/setting.service');

const get = title => booksRepo.get(title);

const save = book => booksRepo.save(book);

const update = (title, book) => booksRepo.update(title, book);
const remove = async title => {
  await statisticService.remove(title);
  await settingsService.remove(title);
  await booksRepo.remove(title);
};

module.exports = { get, save, update, remove };
