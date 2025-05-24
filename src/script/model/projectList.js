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
  console.log(this.projectList);
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
