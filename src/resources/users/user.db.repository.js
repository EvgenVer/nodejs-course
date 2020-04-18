const User = require('./user.model');

const getAll = async () => {
  return User.find({});
};

const getByID = async id => {
  return User.findOne({ _id: id });
};

const postUser = async data => {
  return User.create(data);
};

const getUserByProps = async props => {
  return User.find(props);
};

const putUser = async (id, obj) => {
  return User.updateOne({ _id: id }, { ...obj });
};

const deleteUser = async id => {
  return (await User.deleteOne({ _id: id })).deletedCount;
};

module.exports = { getAll, getByID, postUser, putUser, deleteUser };
