const { OK, NO_CONTENT } = require('http-status-codes');
const router = require('express').Router();

const booksService = require('./books.service');

router.post('/', async (req, res) => {
  const booksEntity = await booksService.save(req.body);
  res.status(OK).send(booksEntity.toResponse());
});

router.get('/', async (req, res) => {
  // const booksEntity = await booksService.get(req.params.title);
  // res.status(OK).send(booksEntity.toResponse());
  res.json('books endpoint');
});

router.put('/:title', async (req, res) => {
  const booksEntity = await booksService.update(req.booksTitle, req.body);
  res.status(OK).send(booksEntity.toResponse());
});

router.delete('/:title', async (req, res) => {
  await booksService.remove(req.params.title);
  res.sendStatus(NO_CONTENT);
});

module.exports = router;
