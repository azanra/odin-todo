export default function ProjectList(name, id) {
  this.projectList = {};
  this.name = name;
  this.id = id;
}

ProjectList.prototype.addTodo = function (todo) {
  this.projectList[todo.id] = todo;
};

ProjectList.prototype.setChecklist = function (id) {
  for (const key in this.projectList) {
    if (id === Number(key)) {
      this.projectList[id].setChecked();
    }
  }
};

ProjectList.prototype.setIsOpen = function (id) {
  for (const key in this.projectList) {
    if (id === Number(key)) {
      this.projectList[id].setIsOpen();
    }
  }
};

ProjectList.prototype.getDueDate = function (id) {
  for (const key in this.projectList) {
    if (id === Number(key)) {
      return this.projectList[key].getDueDate();
    }
  }
};

ProjectList.prototype.setAttribute = function (id, attribute, newValue) {
  for (const key in this.projectList) {
    if (id === Number(key)) {
      this.projectList[id].setAttribute(attribute, newValue);
    }
  }
};
