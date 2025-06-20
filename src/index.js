import { projectData } from "./mainData.js";
import { controller } from "./script/controller/controller.js";
import { projectCard } from "./script/view/projectCard.js";
import { todoSelectProject } from "./script/view/todoSelectProject.js";
import "./style.css";

projectCard.renderCard(projectData);
todoSelectProject.renderOption(projectData);
controller.listenToEvent();
