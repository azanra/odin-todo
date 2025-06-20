import { localData } from "./localStorage.js";

const todoList = localData.todoList.data;

export default function Project(attribute) {
  if (!new.target) {
    throw Error("Use new Keyword to call object constructor");
  }
  this.list = attribute.list || [];
  this.name = attribute.name;
  this.id = attribute.id;
  this.type = "project";
}

Project.prototype.addTodo = function (todo) {
  this.list = [...this.list, todo.id];
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

Project.prototype.deleteList = function (id) {
  this.list = this.list.filter((item) => {
    return item !== id;
  });
};
