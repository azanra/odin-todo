import { formatDistance } from "date-fns";

export default function Todo(attribute) {
  this.id = attribute.id;
  this.title = attribute.title;
  this.description = attribute.description;
  this.createdAt = new Date();
  this.priority = attribute.priority;
  this.note = attribute.note;
  this.checked = attribute.checked;
  this.isOpen = attribute.isOpen;
  this.type = "todo";
}

Todo.prototype.setChecked = function () {
  this.checked = !this.checked;
};

Todo.prototype.setIsOpen = function () {
  this.isOpen = !this.isOpen;
};

Todo.prototype.getDueDate = function () {
  const currentDate = new Date();
  const result = formatDistance(this.createdAt, currentDate);
  return result;
};

Todo.prototype.setAttribute = function (attribute, newValue) {
  this[attribute] = newValue;
};
