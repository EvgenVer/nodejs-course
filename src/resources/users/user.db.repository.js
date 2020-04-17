const User = require('./user.model');

const getAll = async () => {
  return User.find({});
  // usersData
};

const getByID = async id => {
  return User.findOne({ _id: id });
  // return usersData.find(user => user.id === id);
};

const postUser = async data => {
  return User.create(data);
  // usersData.push(obj);
};

const getUserByProps = async props => {
  return User.find(props);
};

const putUser = async (id, obj) => {
  return User.updateOne({ _id: id }, { ...obj });
  /* const index = usersData.findIndex(item => item.id === id);
  if (index !== -1) {
    usersData[index] = { ...obj };
    return usersData[index];
  } */
};

const deleteUser = async id => {
  return (await User.deleteOne({ _id: id })).deletedCount;
  /* const index = usersData.findIndex(item => item.id === id);
  if (index !== -1) {
    usersData.splice(index, 1);
    return true;
  } */
};

module.exports = { getAll, getByID, postUser, putUser, deleteUser };
