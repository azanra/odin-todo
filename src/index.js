import { localData } from "./script/model/localStorage.js";
import { populateData } from "./script/model/populateData.js";
import { attribute } from "./script/view/attribute.js";
import { projectCard } from "./script/view/projectCard.js";
import { todoCard } from "./script/view/todoCard.js";
import "./style.css";

const todoData = populateData.checkData("todo");
console.log(todoData);

const projectData = populateData.checkData("project");
console.log(projectData);
projectData[4].setChecklist(1);

projectCard.renderCard(projectData);
todoCard.renderCard(projectData, todoData, attribute.todoCard);
todoCard.renderCard(projectData, todoData, attribute.todoDetail);

localData.pushData(todoData);
localData.storeData(localData.todoList);

localData.pushData(projectData);
localData.storeData(localData.projectList);
