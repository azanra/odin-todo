import { lastId, projectData } from "../..";
import Project from "../model/project";
import Todo from "../model/todo";
import { attribute } from "../view/attribute";
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
  const addNewTodoBtn = document.querySelector("#addNewTodoBtn");
  const todoInputModal = document.querySelector("#todoInputModal");
  const saveTodoBtn = document.querySelector("#saveTodoBtn");
  const todoNameInput = document.querySelector("#todoName");
  const projectSelect = document.querySelector("#projectSelect");
  const dueDateInput = document.querySelector("#dueDate");
  const prioritySelect = document.querySelector("#prioritySelect");
  const descriptionInput = document.querySelector("#description");
  const noteInput = document.querySelector("#note");

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

  const addNewProjectController = () => {
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

  const addNewTodoController = () => {
    addNewTodoBtn.addEventListener("click", () => {
      todoInputModal.show();
    });
  };

  const saveTodoController = () => {
    saveTodoBtn.addEventListener("click", () => {
      const { attribute, selectProject } = getTodoInputValue();
      if (checkRequiredAttr(attribute) && selectProject) {
        const todo = new Todo(attribute);
      } 
    });
  };

  const checkRequiredAttr = (attribute) => {
    if (attribute.title && attribute.dueDate && attribute.priority) {
      return true;
    } else {
      return false;
    }
  };

  const getTodoInputValue = () => {
    const todoName = todoNameInput.value;
    const selectProject = projectSelect.value;
    const dueDate = dueDateInput.value;
    const priority = prioritySelect.value;
    const description = descriptionInput.value;
    const note = noteInput.value;
    const attribute = {
      id: lastId++,
      title: todoName,
      description: description,
      dueDate: dueDate,
      priority: priority,
      note: note,
    };
    return { attribute, selectProject };
  };

  const listenToEvent = () => {
    createNewProjectController();
    addNewProjectController();
    addNewTodoController();
    saveTodoController();
  };

  return { listenToEvent };
})();
