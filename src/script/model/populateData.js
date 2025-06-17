import { localData } from "./localStorage.js";
import Todo from "./todo.js";
import Project from "./project.js";
import { initialData } from "../initialData.js";

export const populateData = (function () {
  const todoData = (data) => {
    for (const key in data) {
      const todo = new Todo(data[key]);
      localData.todoList.data[todo.id] = todo;
    }
    return localData.todoList.data;
  };

  const projectData = (data) => {
    for (const key in data) {
      const project = new Project(data[key]);
      localData.projectList.data[project.id] = project;
    }
    return localData.projectList.data;
  };

  const initializeData = (type, data) => {
    if (type === "todo") {
      return populateData.todoData(data);
    } else if (type === "project") {
      return populateData.projectData(data);
    } else if (type === "id") {
      return Number(data.lastId);
    }
  };

  const checkData = (type) => {
    if (localData.loadData(type)) {
      const rawData = localData.loadData(type);
      const data = initializeData(type, rawData);
      return data;
    } else {
      const data = initialData[type];
      const initializedData = populateData.initializeData(type, data);
      return initializedData;
    }
  };

  return { todoData, projectData, initializeData, checkData };
})();
