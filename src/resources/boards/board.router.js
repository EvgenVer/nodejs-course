const router = require('express').Router();
const boardsService = require('./board.services');

router.get('/', boardsService.getAll);

router.get('/:id', boardsService.getByID);

router.post('/', boardsService.postBoard);

router.put('/:id', boardsService.putBoard);

router.delete('/:id', boardsService.delBoard);

module.exports = router;
