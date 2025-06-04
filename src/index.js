import { populateData } from "./script/model/populateData.js";
import { projectCard } from "./script/view/projectCard.js";
import { todoCard } from "./script/view/todoCard.js";
import "./style.css";

const todoData = populateData.checkData("todo");
console.log(todoData);

const projectData = populateData.checkData("project");
console.log(projectData);

projectCard.renderCard(projectData);
todoCard.renderCard(projectData, todoData);
