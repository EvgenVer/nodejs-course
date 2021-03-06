const Task = require('./task.model');
const tasksRepo = require('./task.db.repository');

const getAll = async id => await tasksRepo.getAll(id);

const getByID = async id => await tasksRepo.getByID(id);

const postTask = async (data, boardId) =>
  await tasksRepo.postTask(data, boardId);

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
