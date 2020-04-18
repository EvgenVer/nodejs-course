const Board = require('./board.model');
const boardsRepo = require('./board.db.repository');
const taskServices = require('../tasks/task.services');

const getAll = async () => await boardsRepo.getAll();

const getByID = async id => await boardsRepo.getByID(id);

const postBoard = async data => await boardsRepo.postBoard(data);

const putBoard = async (id, obj) => await boardsRepo.putBoard(id, obj);

const deleteBoard = async id => {
  const result = await boardsRepo.deleteBoard(id);
  if (result) await taskServices.removeByBoardID(id);
  return result;
};

module.exports = { getAll, getByID, postBoard, putBoard, deleteBoard };
