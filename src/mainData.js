import { localData } from "./script/model/localStorage";
import { populateData } from "./script/model/populateData";

export const todoData = populateData.checkData("todo");
console.log(todoData);
export const projectData = populateData.checkData("project");
console.log(projectData);

const updateData = (function () {
  const updateTodoData = (todo) => {
    const localTodo = localStorage.getItem("todo");
    if (JSON.stringify(todo) !== localTodo) {
      localData.pushData(todo);
      localData.storeData(localData.todoList);
    }
  };

  const updateProjectData = (project) => {
    const localProject = localStorage.getItem("project");
    if (JSON.stringify(project) !== localProject) {
      localData.pushData(project);
      localData.storeData(localData.projectList);
    }
  };

  return { updateTodoData, updateProjectData };
})();

updateData.updateTodoData(todoData);
updateData.updateProjectData(projectData);
