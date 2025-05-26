import "./style.css";
import img from "./asset/resource/img.png";
import Todo from "./script/model/todo.js";
import Project from "./script/model/project.js";
import { localData } from "./script/model/localStorage.js";

console.log("Hello world!");
const paraElement = document.querySelector("p");
const imgElement = document.createElement("img");
imgElement.src = img;
paraElement.appendChild(imgElement);

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

const project = new Project("default", uniqueId++);
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
