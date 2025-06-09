import { lastId, projectData } from "../..";
import Project from "../model/project";
import { element } from "../view/createElement";
import { projectCard } from "../view/projectCard";

export const controller = (function () {
  let lastId = 6;
  const projectInputModal = document.querySelector("#projectInputModal");
  const createProjectBtn = document.querySelector("#createProjectBtn");
  const cancelAddNewProjectBtn = document.querySelector(
    "#cancelAddNewProjectBtn"
  );
  const addNewProjectBtn = document.querySelector("#addNewProjectBtn");
  const projectNameInput = document.querySelector("#projectNameInput");

  const createNewProjectController = () => {
    createProjectBtn.addEventListener("click", () => {
      projectInputModal.show();
      cancelAddNewProjectController();
    });
  };

  const cancelAddNewProjectController = () => {
    cancelAddNewProjectBtn.addEventListener("click", () => {
      projectInputModal.close();
    });
  };

  const addNewTodoController = () => {
    addNewProjectBtn.addEventListener("click", () => {
      const nameInput = projectNameInput.value;
      const attribute = {
        name: nameInput,
        id: lastId++,
      };
      const newProject = new Project(attribute);
      projectData[attribute.id] = newProject;
      projectInputModal.close();
      element.removeElementChildren(".projectSection");
      projectCard.renderCard(projectData);
      projectNameInput.value = "";
    });
  };

  const listenToEvent = () => {
    createNewProjectController();
    addNewTodoController();
  };

  return { listenToEvent };
})();
