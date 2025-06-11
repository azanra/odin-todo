import { projectData, todoData } from "./mainData.js";
import { controller } from "./script/controller/controller.js";
import { localData } from "./script/model/localStorage.js";
import { projectCard } from "./script/view/projectCard.js";
import { todoSelectProject } from "./script/view/todoSelectProject.js";
import "./style.css";

projectCard.renderCard(projectData);
todoSelectProject.renderOption(projectData);
controller.listenToEvent();

localData.pushData(todoData);
localData.storeData(localData.todoList);

localData.pushData(projectData);
localData.storeData(localData.projectList);
