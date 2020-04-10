const usersData = [];

const getAll = () => usersData;

const getByID = id => {
  return usersData.find(user => user.id === id);
};

const postUser = obj => {
  usersData.push(obj);
};

const putUser = (id, obj) => {
  const index = usersData.findIndex(item => item.id === id);
  if (index !== -1) {
    usersData[index] = { ...obj };
    return usersData[index];
  }
};

const deleteUser = id => {
  const index = usersData.findIndex(item => item.id === id);
  if (index !== -1) {
    usersData.splice(index, 1);
    return true;
  }
};

module.exports = { getAll, getByID, postUser, putUser, deleteUser };
