let tasksData = [];

const getAll = id => {
  return tasksData.filter(item => item.boardId === id);
};

const getByID = id => {
  return tasksData.find(task => task.id === id);
};

const postTask = obj => {
  tasksData.push(obj);
};

const putTask = (id, obj) => {
  const index = tasksData.findIndex(item => item.id === id);
  if (index !== -1) {
    tasksData[index] = { ...obj };
    return tasksData[index];
  }
};

const deleteTask = id => {
  const index = tasksData.findIndex(item => item.id === id);
  if (index !== -1) {
    tasksData.splice(index, 1);
    return true;
  }
};

const deleteTaskByBoardId = id => {
  tasksData = tasksData.filter(item => item.boardId !== id);
};

const assigneeTask = userId => {
  tasksData.forEach(item => {
    if (item.userId === userId) item.userId = null;
  });
};

module.exports = {
  getAll,
  getByID,
  postTask,
  putTask,
  deleteTask,
  deleteTaskByBoardId,
  assigneeTask
};
