const router = require('express').Router();
const boardsService = require('./board.services');
// const taskRouter = require('../tasks/task.router');

router.get('/', boardsService.getAll);

router.get('/:id', boardsService.getByID);

router.post('/', boardsService.postBoard);

router.put('/:id', boardsService.putBoard);

router.delete('/:id', boardsService.delBoard);

router.get('/:id/tasks/:id1', (req, res) => {
  console.log(req.params);
  res.end();
});

module.exports = router;
