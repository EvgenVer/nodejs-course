const router = require('express').Router();
const boardsService = require('./board.services');
const tasksService = require('../tasks/task.services');

router.get('/', boardsService.getAll);

router.get('/:id', boardsService.getByID);

router.post('/', boardsService.postBoard);

router.put('/:id', boardsService.putBoard);

router.delete('/:id', boardsService.delBoard);

router.get('/:boardId/tasks', tasksService.getAll);

router.get('/:boardId/tasks/:id', tasksService.getByID);

router.post('/:boardId/tasks', tasksService.postTask);

router.put('/:boardId/tasks/:id', tasksService.putTask);

router.delete('/:boardId/tasks/:id', tasksService.delTask);

module.exports = router;
