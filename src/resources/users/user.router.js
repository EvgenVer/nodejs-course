const router = require('express').Router();
const usersService = require('./user.service');

router.get('/', usersService.getAll);

router.get('/:id', usersService.getByID);

router.post('/', usersService.postUser);

router.put('/:id', usersService.putUser);

router.delete('/:id', usersService.delUser);

module.exports = router;
