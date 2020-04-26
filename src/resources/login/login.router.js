const router = require('express').Router();
const getToken = require('./login.services');
const usersService = require('../users/user.service');

router.post('/', async (req, res, next) => {
  try {
    const user = await usersService.checkUser(req.body);
    if (!user) throw new Error(403);
    const token = await getToken(user);
    res.json({ token });
  } catch (error) {
    next(error);
    return;
  }
});

module.exports = router;
