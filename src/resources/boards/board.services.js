const Board = require('./board.model');
const boardsRepo = require('./board.memory.repository');

const getAll = async (req, res) => {
  const boards = await boardsRepo.getAll();
  res.json(boards);
};

const getByID = async (req, res) => {
  try {
    const board = await boardsRepo.getByID(req.params.id);
    if (!board) {
      res.status(404);
      res.end();
      return;
    }
    res.json(board);
  } catch (error) {
    console.log(error);
    res.status(400);
    res.end('smth went wrong');
  }
};

const postBoard = async (req, res) => {
  try {
    const board = new Board.Board(req.body);
    if (!board) {
      res.status(400);
      res.end('Bad request');
      return;
    }
    await boardsRepo.addBoard(board);
    res.json(board);
  } catch (error) {
    console.log(error);
    res.status(500);
    res.end('Smth went wrong');
  }
};

const putBoard = async (req, res) => {
  try {
    const board = await boardsRepo.changeBoard(req.params.id, req.body);
    if (!board) {
      res.status(404);
      res.end();
      return;
    }
    res.json(board);
  } catch (error) {
    console.log(error);
    res.status(500);
    res.end('Smth went wrong');
  }
};

const delBoard = async (req, res) => {
  try {
    const result = await boardsRepo.deleteBoard(req.params.id);
    if (result) {
      res.status(404);
      res.end();
      return;
    }
    res.status(204);
    res.end('The user has been deleted');
  } catch (error) {
    console.log(error);
    res.status(502);
    res.end('Smth went wrong');
  }
};

module.exports = { getAll, getByID, postBoard, putBoard, delBoard };
