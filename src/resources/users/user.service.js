const User = require('./user.model');
const usersRepo = require('./user.memory.repository');

const getAll = async (req, res) => {
  const users = await usersRepo.getAll();
  res.json(users.map(User.toResponse));
};

const getByID = async (req, res) => {
  try {
    const user = await usersRepo.getByID(req.params.id);
    if (!user) {
      res.status(404);
      res.end();
      return;
    }
    res.json(User.toResponse(user));
  } catch (error) {
    console.log(error);
    res.status(400);
    res.end('smth went wrong');
  }
};

const postUser = async (req, res) => {
  try {
    const user = new User(req.body);
    if (!user) {
      res.status(400);
      res.end('Bad request');
      return;
    }
    await usersRepo.addUser(user);
    res.json(User.toResponse(user));
  } catch (error) {
    console.log(error);
    res.status(500);
    res.end('Smth went wrong');
  }
};

const putUser = async (req, res) => {
  try {
    const user = await usersRepo.changeUser(req.params.id, req.body);
    if (!user) {
      res.status(404);
      res.end();
      return;
    }
    res.json(User.toResponse(user));
  } catch (error) {
    console.log(error);
    res.status(500);
    res.end('Smth went wrong');
  }
};

const delUser = async (req, res) => {
  try {
    const result = await usersRepo.deleteUser(req.params.id);
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

module.exports = { getAll, getByID, postUser, putUser, delUser };
