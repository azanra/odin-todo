import { formatDistance } from "date-fns";

export default function Todo(attribute) {
  if (!new.target) {
    throw Error("Use new Keyword to call object constructor");
  }
  this.id = attribute.id;
  this.title = attribute.title;
  this.description = attribute.description;
  this.createdAt = new Date();
  this.dueDate = attribute.dueDate;
  this.priority = attribute.priority;
  this.note = attribute.note;
  this.done = attribute.done || false;
  this.isOpen = false;
  this.type = "todo";
}

Todo.prototype.setdone = function () {
  this.done = !this.done;
};

Todo.prototype.setIsOpen = function () {
  this.isOpen = !this.isOpen;
};

Todo.prototype.getDueDate = function () {
  const currentDate = new Date();
  const result = formatDistance(this.dueDate, currentDate);
  return result;
};

Todo.prototype.setAttribute = function (attribute, newValue) {
  this[attribute] = newValue;
};
