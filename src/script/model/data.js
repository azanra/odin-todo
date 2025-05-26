import Project from "./project.js";
import Todo from "./todo.js";

export const data = (function () {
  const parsedTodoList = {
    type: "todo",
    parsedData: {},
  };
  const parsedProjectList = {
    type: "project",
    parsedData: {},
  };
  const loadData = (data) => {
    if (data) {
      for (const key in data) {
        if (data[key].type === "todo") {
          parsedTodoList.parsedData[data[key].id] = new Todo(data[key]);
        } else {
          parsedProjectList.parsedData[data[key].id] = new Project(data[key]);
        }
      }
    }
  };
  return { parsedTodoList, parsedProjectList, loadData };
})();
