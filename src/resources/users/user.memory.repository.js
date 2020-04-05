const path = require('path');
const memory = require('../../common/memory.repository');

const pathToUsers = path.join(__dirname, '../../common/moc_data/users.json');

const getAll = () => memory.getAll(pathToUsers);

const getByID = id => memory.getByID(id, pathToUsers);

const addUser = obj => memory.addData(obj, pathToUsers);

const changeUser = (id, obj) => memory.changeData(id, obj, pathToUsers);

const deleteUser = id => memory.deleteData(id, pathToUsers);

module.exports = { getAll, getByID, addUser, changeUser, deleteUser };
