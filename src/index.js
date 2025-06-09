import { controller } from "./script/controller/controller.js";
import { localData } from "./script/model/localStorage.js";
import { populateData } from "./script/model/populateData.js";
import { attribute } from "./script/view/attribute.js";
import { projectCard } from "./script/view/projectCard.js";
import { todoCard } from "./script/view/todoCard.js";
import { todoSelectProject } from "./script/view/todoSelectProject.js";
import "./style.css";

export const todoData = populateData.checkData("todo");
console.log(todoData);

export const projectData = populateData.checkData("project");
console.log(projectData);

projectCard.renderCard(projectData);
// todoCard.renderCard(projectData, todoData, attribute.todoCard);
// todoCard.renderCard(projectData, todoData, attribute.todoDetail);
todoSelectProject.renderOption(projectData);
controller.listenToEvent();

localData.pushData(todoData);
localData.storeData(localData.todoList);

localData.pushData(projectData);
localData.storeData(localData.projectList);
