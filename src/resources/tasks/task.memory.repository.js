const path = require('path');
const memory = require('../../common/memory.repository');

const pathToTasks = path.join(__dirname, '../../common/moc_data/task.json');

const getAll = () => memory.getAll(pathToTasks);

const getByID = id => memory.getByID(id, pathToTasks);

const addTask = obj => memory.addData(obj, pathToTasks);

const changeTask = (id, obj) => memory.changeData(id, obj, pathToTasks);

const deleteTask = id => memory.deleteData(id, pathToTasks);

module.exports = { getAll, getByID, addTask, changeTask, deleteTask };
