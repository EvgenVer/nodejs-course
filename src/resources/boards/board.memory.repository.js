const path = require('path');
const memory = require('../../common/memory.repository');

const pathToBoards = path.join(__dirname, '../../common/moc_data/boards.json');
const pathToTasks = path.join(__dirname, '../../common/moc_data/task.json');

const getAll = () => memory.getAll(pathToBoards);

const getByID = id => memory.getByID(id, pathToBoards);

const addBoard = obj => memory.addData(obj, pathToBoards);

const changeBoard = (id, obj) => memory.changeData(id, obj, pathToBoards);

const deleteBoard = id => memory.deleteData(id, pathToBoards);

const deleteRelativeTask = id => memory.deleteTaskData(id, pathToTasks);

module.exports = {
  getAll,
  getByID,
  addBoard,
  changeBoard,
  deleteBoard,
  deleteRelativeTask
};
