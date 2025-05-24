export default function ProjectList(name, id) {
  this.projectList = [];
  this.name = name;
  this.id = id;
}

ProjectList.prototype.addTodo = function (todo) {
  this.projectList = [...this.projectList, todo];
};

ProjectList.prototype.setChecklist = function (id) {
  this.projectList.map((item) => {
    if (item.id === id) {
      item.setChecked();
    }
  });
};

ProjectList.prototype.setIsOpen = function (id) {
  this.projectList.map((item) => {
    if (item.id === id) {
      item.setIsOpen();
    }
  });
};

ProjectList.prototype.getDueDate = function (id) {
  let dueDate;
  this.projectList.map((item) => {
    if (item.id === id) {
      dueDate = item.getDueDate();
    }
  });
  return dueDate;
};

ProjectList.prototype.setAttribute = function (id, attribute, newValue) {
  this.projectList.map((item) => {
    if (item.id === id) {
      item.setAttribute(attribute, newValue);
    }
  });
};

ProjectList.prototype.deleteTodo = function (id) {
  this.projectList = this.projectList.filter((item) => {
    return item.id !== id;
  });
};
