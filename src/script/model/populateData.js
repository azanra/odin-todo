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

  const initializeData = (type) => {
    if (type === "todo") {
      return populateData.todoData(initialData.todo);
    } else {
      return populateData.projectData(initialData.project);
    }
  };

  return { todoData, projectData, initializeData };
})();
