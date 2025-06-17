export const localData = (function () {
  const todoList = {
    type: "todo",
    data: {},
  };

  const projectList = {
    type: "project",
    data: {},
  };

  const lastId = {
    type: "id",
    data: null,
  };

  const storeData = (list) => {
    localStorage.setItem(list.type, JSON.stringify(list.data));
  };

  const loadData = (type) => {
    if (type === "todo") {
      const todo = JSON.parse(localStorage.getItem("todo"));
      console.log(todo);
      return todo;
    } else if (type === "project") {
      const project = JSON.parse(localStorage.getItem("project"));
      console.log(project);
      return project;
    } else if (type === "id") {
      const lastId = JSON.parse(localStorage.getItem("id"));
      console.log(lastId);
      return lastId;
    }
  };

  return { todoList, projectList, lastId, storeData, loadData };
})();
