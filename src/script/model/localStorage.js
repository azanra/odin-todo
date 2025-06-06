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
      todoList.data[data.id] = data;
    } else {
      projectList.data[data.id] = data;
    }
  };

  const storeData = (list) => {
    localStorage.setItem(list.type, JSON.stringify(list.data));
  };

  const loadData = (type) => {
    if (type === "todo") {
      return JSON.parse(localStorage.getItem("todo"));
    } else {
      return JSON.parse(localStorage.getItem("project"));
    }
  };

  return { todoList, projectList, pushData, storeData, loadData };
})();
