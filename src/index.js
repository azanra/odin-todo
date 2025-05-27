import "./style.css";
import Todo from "./script/model/todo.js";
import Project from "./script/model/project.js";
import { localData } from "./script/model/localStorage.js";
import { data } from "./script/model/data.js";

let uniqueId = 0;

const attribute = {
  id: uniqueId++,
  title: "Finish homework",
  description: "Math homework page 210, number one to five",
  priority: "High",
  note: "Finish it ASAP",
  checked: false,
  isOpen: false,
};

const todo = new Todo(attribute);
console.log(todo);
localData.pushData(todo);

const projectAttr = {
  id: uniqueId++,
  name: "default",
};

const project = new Project(projectAttr);
console.log(project);
project.addTodo(todo.id);
console.log(project);
console.log(project.getDueDate(0));

project.setChecklist(0);
project.setIsOpen(0);

project.setAttribute(0, "title", "New title");

localData.pushData(todo);
localData.pushData(project);

localData.storeData(localData.todoList);
localData.storeData(localData.projectList);

const todoData = localData.loadData("todo");
console.log(todoData);

const projectData = localData.loadData("project");
console.log(projectData);

data.loadData(todoData);
data.loadData(projectData);

const parsedTodo = data.parsedTodoList;
console.log(parsedTodo);

const parsedProject = data.parsedProjectList;
console.log(parsedProject);

project.deleteList(0);
console.log(project);
