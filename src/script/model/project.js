import { localData } from "./localStorage.js";

const todoList = localData.todoList.data;

export default function Project(name, id) {
  this.list = [];
  this.name = name;
  this.id = id;
  this.type = "list";
}

Project.prototype.addTodo = function (todo) {
  this.list = [...this.list, todo];
};

Project.prototype.setChecklist = function (id) {
  this.list.map((item) => {
    if (item === id) {
      todoList[id].setChecked();
    }
  });
};

Project.prototype.setIsOpen = function (id) {
  this.list.map((item) => {
    if (item === id) {
      todoList[id].setIsOpen();
    }
  });
};

Project.prototype.getDueDate = function (id) {
  let dueDate;
  this.list.map((item) => {
    if (item === id) {
      dueDate = todoList[id].getDueDate();
    }
  });
  return dueDate;
};

Project.prototype.setAttribute = function (id, attribute, newValue) {
  this.list.map((item) => {
    if (item === id) {
      todoList[id].setAttribute(attribute, newValue);
    }
  });
};

Project.prototype.deleteTodo = function (id) {
  this.list = this.list.filter((item) => {
    return item !== id;
  });
};
