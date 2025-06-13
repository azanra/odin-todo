export const localData = (function () {
  const todoList = {
    type: "todo",
    data: {},
  };

  const projectList = {
    type: "project",
    data: {},
  };

  const pushData = (data) => {
    if (data.type === "todo") {
      todoList.data = data;
    } else {
      projectList.data = data;
    }
  };

  const storeData = (list) => {
    localStorage.setItem(list.type, JSON.stringify(list.data));
  };

  const loadData = (type) => {
    if (type === "todo") {
      const todo = JSON.parse(localStorage.getItem("todo"));
      console.log(todo);
      return todo;
    } else {
      const project = JSON.parse(localStorage.getItem("project"));
      console.log(project);
      return project;
    }
  };

  return { todoList, projectList, pushData, storeData, loadData };
})();
