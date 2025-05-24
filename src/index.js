import "./style.css";
import img from "./asset/resource/img.png";
import Todo from "./script/model/todo.js";
import ProjectList from "./script/model/projectList.js";

console.log("Hello world!");
const paraElement = document.querySelector("p");
const imgElement = document.createElement("img");
imgElement.src = img;
paraElement.appendChild(imgElement);

const attribute = {
  id: 1,
  title: "Finish homework",
  description: "Math homework page 210, number one to five",
  priority: "High",
  note: "Finish it ASAP",
  checked: false,
  isOpen: false,
};

const todo = new Todo(attribute);
console.log(todo);

const projectList = new ProjectList("default", 1);
projectList.addTodo(todo);
console.log(projectList);
console.log(projectList.getDueDate(1));

projectList.setChecklist(1);
projectList.setIsOpen(1);

projectList.setAttribute(1, "title", "New title");

projectList.deleteTodo(1);
console.log(projectList);
