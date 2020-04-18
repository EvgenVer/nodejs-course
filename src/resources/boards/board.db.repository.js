const Board = require('./board.model');

const getAll = async () => {
  return Board.find({});
};

const getByID = async id => {
  return Board.findOne({ id });
};

const postBoard = async data => {
  return Board.create(data);
};

const putBoard = async (id, obj) => {
  return Board.updateOne({ id }, { ...obj });
};

const deleteBoard = async id => {
  return (await Board.deleteOne({ id })).deletedCount;
};

module.exports = { getAll, getByID, postBoard, putBoard, deleteBoard };
