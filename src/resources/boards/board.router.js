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

router.get('/', async (req, res, next) => {
  try {
    const boards = await boardsService.getAll();
    res.json(boards);
  } catch (error) {
    next(error);
    return;
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const board = await boardsService.getByID(req.params.id);
    if (!board) throw new Error(404);
    res.json(board);
  } catch (error) {
    next(error);
    return;
  }
});

router.post('/', async (req, res, next) => {
  try {
    const board = await boardsService.postBoard(req.body);
    if (!board) throw new Error(400);
    res.json(board);
  } catch (error) {
    next(error);
    return;
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const board = await boardsService.putBoard(req.params.id, req.body);
    if (!board) throw new Error(404);
    res.json(board);
  } catch (error) {
    next(error);
    return;
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const result = await boardsService.deleteBoard(req.params.id);
    if (!result) throw new Error(404);
    res.status(204);
    res.end('The board has been deleted');
  } catch (error) {
    next(error);
    return;
  }
});

module.exports = router;
