import { localData } from "./localStorage.js";
import Todo from "./todo.js";

export const populateData = (function () {
  const todo = (data) => {
    for (const key in data) {
      const todo = new Todo(data[key]);
      localData.todoList.data[todo.id] = todo;
    }
    return localData.todoList.data;
  };
  return { todo };
})();
