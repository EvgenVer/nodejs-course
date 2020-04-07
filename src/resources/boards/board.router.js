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

router.get('/', boardsService.getAll);

router.get('/:id', boardsService.getByID);

router.post('/', boardsService.postBoard);

router.put('/:id', boardsService.putBoard);

router.delete('/:id', boardsService.delBoard);

module.exports = router;
