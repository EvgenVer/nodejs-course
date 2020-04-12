const router = require('express').Router();
const tasksService = require('./task.services');

router.get('/', async (req, res, next) => {
  try {
    const tasks = await tasksService.getAll(req.boardId);
    if (!tasks) throw new Error(400);
    res.json(tasks);
  } catch (error) {
    next(error);
    return;
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const task = await tasksService.getByID(req.params.id);
    if (!task) throw new Error(404);
    res.json(task);
  } catch (error) {
    next(error);
    return;
  }
});

router.post('/', async (req, res, next) => {
  try {
    const task = await tasksService.postTask(req.body, req.boardId);
    if (!task) throw new Error(400);
    res.json(task);
  } catch (error) {
    next(error);
    return;
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const task = await tasksService.putTask(req.params.id, req.body);
    if (!task) throw new Error(404);
    res.json(task);
  } catch (error) {
    next(error);
    return;
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const result = await tasksService.deleteTask(req.params.id);
    if (!result) throw new Error(404);
    res.status(204);
    res.end('The task has been deleted');
  } catch (error) {
    next(error);
    return;
  }
});

module.exports = router;
