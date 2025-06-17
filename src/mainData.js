import { localData } from "./script/model/localStorage";
import { populateData } from "./script/model/populateData";
import { todoSelectProject } from "./script/view/todoSelectProject";

export const todoData = populateData.checkData("todo");
console.log(todoData);
export const projectData = populateData.checkData("project");
console.log(projectData);

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
      todoSelectProject.renderOption(project);
    }
  };

  return { updateTodoData, updateProjectData };
})();
