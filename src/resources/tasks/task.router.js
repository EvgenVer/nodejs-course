const router = require('express').Router();
const tasksService = require('./task.services');

router.get('/', tasksService.getAll);

router.get('/:id', tasksService.getByID);

router.post('/', tasksService.postTask);

router.put('/:id', tasksService.putTask);

router.delete('/:id', tasksService.delTask);

module.exports = router;
