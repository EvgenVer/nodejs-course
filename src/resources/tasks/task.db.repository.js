const Task = require('./task.model');

const getAll = async id => {
  return Task.find({ boardId: id });
};

const getByID = async id => {
  return Task.findOne({ id });
};

const postTask = async (data, boardId) => {
  return Task.create({ ...data, boardId });
};

const putTask = async (id, obj) => {
  return Task.updateOne({ id }, { ...obj });
};

const deleteTask = async id => {
  return (await Task.deleteOne({ id })).deletedCount;
};

const deleteTaskByBoardId = async id => {
  return (await Task.deleteMany({ boardId: id })).deletedCount;
};

const assigneeTask = async userId => {
  await Task.updateMany({ userId }, { userId: null });
};

module.exports = {
  getAll,
  getByID,
  postTask,
  putTask,
  deleteTask,
  deleteTaskByBoardId,
  assigneeTask
};
