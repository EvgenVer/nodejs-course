const Task = require('./task.model');
const tasksRepo = require('./task.memory.repository');

const getAll = async (req, res) => {
  const tasks = await tasksRepo.getAll();
  res.json(tasks.map(Task.toResponse));
};

const getByID = async (req, res) => {
  try {
    const task = await tasksRepo.getByID(req.params.id);
    if (!task) {
      res.status(404);
      res.end();
      return;
    }
    res.json(Task.toResponse(task));
  } catch (error) {
    console.log(error);
    res.status(400);
    res.end('smth went wrong');
  }
};

const postTask = async (req, res) => {
  try {
    const boardId = req.params['boardId'];
    const task = new Task(req.body);
    task.boardId = boardId;
    if (!task) {
      res.status(400);
      res.end('Bad request');
      return;
    }
    await tasksRepo.addTask(task);
    res.json(task);
  } catch (error) {
    console.log(error);
    res.status(500);
    res.end('Smth went wrong');
  }
};

const putTask = async (req, res) => {
  try {
    const task = await tasksRepo.changeTask(req.params.id, req.body);
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
};

const delTask = async (req, res) => {
  try {
    const result = await tasksRepo.deleteTask(req.params.id);
    if (result) {
      res.status(404);
      res.end();
      return;
    }
    res.status(204);
    res.end('The user has been deleted');
  } catch (error) {
    console.log(error);
    res.status(500);
    res.end('Smth went wrong');
  }
};

module.exports = { getAll, getByID, postTask, putTask, delTask };
