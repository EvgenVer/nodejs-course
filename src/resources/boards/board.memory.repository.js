const boardsData = [];

const getAll = () => boardsData;

const getByID = id => {
  return boardsData.find(board => board.id === id);
};

const postBoard = obj => {
  boardsData.push(obj);
};

const putBoard = (id, obj) => {
  const index = boardsData.findIndex(item => item.id === id);
  if (index !== -1) {
    boardsData[index] = { ...obj };
    return boardsData[index];
  }
};

const deleteBoard = id => {
  const index = boardsData.findIndex(item => item.id === id);
  if (index !== -1) {
    boardsData.splice(index, 1);
    return true;
  }
};

module.exports = { getAll, getByID, postBoard, putBoard, deleteBoard };
