const User = require('./user.model');
const usersRepo = require('./user.memory.repository');
const taskServices = require('../tasks/task.services');

const getAll = async () => {
  const users = await usersRepo.getAll();
  return users.map(User.toResponse);
};

const getByID = async id => {
  const user = await usersRepo.getByID(id);
  if (user) return User.toResponse(user);
  return;
};

const postUser = async data => {
  const user = new User(data);
  await usersRepo.postUser(user);
  return User.toResponse(user);
};

const putUser = async (id, obj) => {
  const user = await usersRepo.putUser(id, obj);
  return User.toResponse(user);
};

const deleteUser = async id => {
  const result = await usersRepo.deleteUser(id);
  if (result) await taskServices.assigneeTask(id);
  return result;
};

module.exports = { getAll, getByID, postUser, putUser, deleteUser };
