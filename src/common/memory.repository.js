/* eslint-disable no-undef */
/* eslint-disable guard-for-in */
const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const getAll = async pathToData => {
  const jsonData = await readFile(pathToData, 'utf-8');
  const data = JSON.parse(jsonData);
  return data;
};

const getByID = async (id, pathToData) => {
  const data = await getAll(pathToData);
  return data.find(item => item.id === id);
};

const setData = (data, pathToData) => {
  return writeFile(pathToData, JSON.stringify(data));
};

const addData = async (obj, pathToData) => {
  const data = await getAll(pathToData);
  const newData = data.concat(obj);
  setData(newData, pathToData);
};

const changeData = async (id, obj, pathToData) => {
  const data = await getAll(pathToData);
  const index = data.findIndex(item => item.id === id);
  for (prop in data[index]) {
    data[index][prop] = obj[prop];
  }
  setData(data, pathToData);
  return data[index];
};

const deleteData = async (id, pathToData) => {
  const data = await getAll(pathToData);
  const newData = data.filter(item => item.id !== id);
  setData(newData, pathToData);
  return data.length === newData.length;
};

const deleteTaskData = async (boardId, pathToData) => {
  const data = await getAll(pathToData);
  const newData = data.filter(item => item.boardId !== boardId);
  setData(newData, pathToData);
  console.log(newData.findIndex(item => item.boardId === boardId));
  return data.length === newData.length;
};

module.exports = {
  getAll,
  getByID,
  addData,
  changeData,
  deleteData,
  deleteTaskData
};
