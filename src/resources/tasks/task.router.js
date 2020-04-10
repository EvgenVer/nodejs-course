const router = require('express').Router();
const tasksService = require('./task.services');

router.get('/', async (req, res) => {
  try {
    const tasks = await tasksService.getAll();
    if (!tasks) {
      res.status(400);
      res.end();
      return;
    }
    // console.log(tasks);
    res.json(tasks);
  } catch (error) {
    console.log(error);
    res.status(500);
    res.end('smth went wrong');
  }
});

router.get('/:id', async (req, res) => {
  try {
    const task = await tasksService.getByID(req.params.id);
    if (!task) {
      res.status(404);
      res.end();
      return;
    }
    res.json(task);
  } catch (error) {
    console.log(error);
    res.status(500);
    res.end('smth went wrong');
  }
});

router.post('/', async (req, res) => {
  try {
    const task = await tasksService.postTask(req.body, req.boardId);
    if (!task) {
      res.status(400);
      res.end('Bad request');
      return;
    }
    res.json(task);
  } catch (error) {
    console.log(error);
    res.status(500);
    res.end('Smth went wrong');
  }
});

router.put('/:id', async (req, res) => {
  try {
    const task = await tasksService.putTask(req.params.id, req.body);
    if (!task) {
      res.status(404);
      res.end();
      return;
    }
    res.json(task);
  } catch (error) {
    console.log(error);
    res.status(500);
    res.end('Smth went wrong');
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const result = await tasksService.deleteTask(req.params.id);
    if (!result) {
      res.status(404);
      res.end();
      return;
    }
    res.status(204);
    res.end('The task has been deleted');
  } catch (error) {
    console.log(error);
    res.status(500);
    res.end('Smth went wrong');
  }
});

module.exports = router;
