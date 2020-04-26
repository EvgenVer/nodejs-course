const User = require('./user.model');
const usersRepo = require('./user.db.repository');
const taskServices = require('../tasks/task.services');
const bcrypt = require('bcrypt');

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
  const saltRounds = 10;
  const password = await bcrypt.hash(data.password, saltRounds);
  const user = await usersRepo.postUser({ ...data, password });
  return User.toResponse(user);
};

const putUser = async (id, obj) => {
  const saltRounds = 10;
  const password = await bcrypt.hash(obj.password, saltRounds);
  const newObj = { ...obj, password };
  const user = await usersRepo.putUser(id, newObj);
  return User.toResponse(user);
};

const deleteUser = async id => {
  const result = await usersRepo.deleteUser(id);
  if (result) await taskServices.assigneeTask(id);
  return result;
};

const checkUser = async user => {
  const users = await usersRepo.getUserByProps({ login: user.login });
  if (users) {
    return await users.find(item =>
      bcrypt.compareSync(user.password, item.password)
    );
  }
  return;
};

module.exports = { getAll, getByID, postUser, putUser, deleteUser, checkUser };
