import { localData } from "./script/model/localStorage";
import { populateData } from "./script/model/populateData";
import { element } from "./script/view/createElement";
import { todoSelectProject } from "./script/view/todoSelectProject";

export let todoData = populateData.checkData("todo");
export const updateTodoData = (newTodo) => {
  todoData = newTodo;
};
export let projectData = populateData.checkData("project");
console.log(projectData);

export let lastId = populateData.checkData("id");
export const increaseLastId = () => {
  lastId = lastId + 1;
};
console.log(lastId);

export const updateData = (function () {
  const updateTodoData = (todo) => {
    const localTodo = localStorage.getItem("todo");
    if (JSON.stringify(todo) !== localTodo) {
      localData.todoList.data = todo;
      localData.storeData(localData.todoList);
    }
  };

  const updateProjectData = (project) => {
    const localProject = localStorage.getItem("project");
    if (JSON.stringify(project) !== localProject) {
      localData.projectList.data = project;
      localData.storeData(localData.projectList);
      element.removeElementChildren("#projectSelect");
      todoSelectProject.renderOption(project);
    }
  };

  const updateLastId = (lastId) => {
    const localLastId = localStorage.getItem("id");
    if (JSON.stringify(lastId) !== localLastId) {
      localData.lastId.data = lastId;
      localData.storeData(localData.lastId);
    }
  };

  return { updateTodoData, updateProjectData, updateLastId };
})();
