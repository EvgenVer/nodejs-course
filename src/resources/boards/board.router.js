const router = require('express').Router();
const boardsService = require('./board.services');
const taskRouter = require('../tasks/task.router');

router.use(
  '/:boardId/tasks',
  (req, res, next) => {
    req.boardId = req.params.boardId;
    next();
  },
  taskRouter
);

router.get('/', async (req, res) => {
  try {
    const boards = await boardsService.getAll();
    if (!boards) {
      res.status(400);
      res.end();
      return;
    }
    res.json(boards);
  } catch (error) {
    console.log(error);
    res.status(500);
    res.end('smth went wrong');
  }
});

router.get('/:id', async (req, res) => {
  try {
    const board = await boardsService.getByID(req.params.id);
    if (!board) {
      res.status(404);
      res.end();
      return;
    }
    res.json(board);
  } catch (error) {
    console.log(error);
    res.status(500);
    res.end('smth went wrong');
  }
});

router.post('/', async (req, res) => {
  try {
    const board = await boardsService.postBoard(req.body);
    if (!board) {
      res.status(400);
      res.end('Bad request');
      return;
    }
    res.json(board);
  } catch (error) {
    console.log(error);
    res.status(500);
    res.end('Smth went wrong');
  }
});

router.put('/:id', async (req, res) => {
  try {
    const board = await boardsService.putBoard(req.params.id, req.body);
    if (!board) {
      res.status(404);
      res.end();
      return;
    }
    res.json(board);
  } catch (error) {
    console.log(error);
    res.status(500);
    res.end('Smth went wrong');
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const result = await boardsService.deleteBoard(req.params.id);
    if (!result) {
      res.status(404);
      res.end();
      return;
    }
    res.status(204);
    res.end('The board has been deleted');
  } catch (error) {
    console.log(error);
    res.status(500);
    res.end('Smth went wrong');
  }
});

module.exports = router;
