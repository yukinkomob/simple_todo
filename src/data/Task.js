const task = {
  id: -1,
  title: "",
};

let lastId = -1;

const getLastId = () => {
  lastId++;
  return lastId;
};

const taskList = [];

export const getTaskList = () => {
  return taskList;
};

export const addNewTask = (title) => {
  let newTask = { ...task, id: getLastId(), title: title };

  taskList.push(newTask);
};

export const updateTask = (id, title) => {
  let task = taskList.find((task) => task.id === id);
  task.title = title;
};

export const deleteTask = (id) => {
  let newList = taskList.filter((task) => task.id !== id);
  taskList = [...newList];
};
