const Task = require('./task.model');
const tasksRepo = require('./task.memory.repository');

const getAll = async () => await tasksRepo.getAll();

const getByID = async id => await tasksRepo.getByID(id);

const postTask = async (data, boardId) => {
  const task = new Task(data);
  task.boardId = boardId;
  await tasksRepo.postTask(task);
  return task;
};

const putTask = async (id, obj) => await tasksRepo.putTask(id, obj);

const deleteTask = async id => await tasksRepo.deleteTask(id);

const removeByBoardID = async id => await tasksRepo.deleteTaskByBoardId(id);

const assigneeTask = async userId => await tasksRepo.assigneeTask(userId);

module.exports = {
  getAll,
  getByID,
  postTask,
  putTask,
  deleteTask,
  removeByBoardID,
  assigneeTask
};
