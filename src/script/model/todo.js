export default function Todo(attribute) {
  this.id = attribute.id;
  this.title = attribute.title;
  this.description = attribute.description;
  this.dueDate = attribute.dueDate;
  this.priority = attribute.priority;
  this.note = attribute.note;
  this.checked = attribute.checked;
  this.isOpen = attribute.isOpen;
}

Todo.prototype.setChecked = function () {
  this.checked = !this.checked;
};

Todo.prototype.setIsOpen = function () {
  this.isOpen = !this.isOpen;
};
