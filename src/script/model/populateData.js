import { localData } from "./localStorage.js";
import Todo from "./todo.js";
import Project from "./project.js";

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
  return { todoData, projectData };
})();
