const router = require('express').Router();
const usersService = require('./user.service');

router.get('/', async (req, res, next) => {
  try {
    const users = await usersService.getAll();
    res.json(users);
  } catch (error) {
    next(error);
    return;
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const user = await usersService.getByID(req.params.id);
    if (!user) throw new Error(404);
    res.json(user);
  } catch (error) {
    next(error);
    return;
  }
});

router.post('/', async (req, res, next) => {
  try {
    const user = await usersService.postUser(req.body);
    if (!user) throw new Error(400);
    res.json(user);
  } catch (error) {
    next(error);
    return;
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const user = await usersService.putUser(req.params.id, req.body);
    if (!user) throw new Error(404);
    res.json(user);
  } catch (error) {
    next(error);
    return;
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const result = await usersService.deleteUser(req.params.id);
    if (!result) throw new Error(404);
    res.status(204);
    res.end('The user has been deleted');
  } catch (error) {
    next(error);
    return;
  }
});

module.exports = router;
