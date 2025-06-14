import { projectData, todoData, updateData } from "../../mainData.js";
import Project from "../model/project.js";
import Todo from "../model/todo.js";
import { attribute } from "../view/attribute.js";
import { element } from "../view/createElement.js";
import { projectCard } from "../view/projectCard.js";
import { todoCard } from "../view/todoCard.js";

export const controller = (function () {
  let lastId = 6;
  const projectInputModal = document.querySelector("#projectInputModal");
  const createProjectBtn = document.querySelector("#createProjectBtn");
  const cancelAddNewProjectBtn = document.querySelector(
    "#cancelAddNewProjectBtn"
  );
  const projectNameInput = document.querySelector("#projectNameInput");
  const addNewTodoBtn = document.querySelector("#addNewTodoBtn");
  const todoInputModal = document.querySelector("#todoInputModal");
  const todoNameInput = document.querySelector("#todoName");
  const projectSelect = document.querySelector("#projectSelect");
  const dueDateInput = document.querySelector("#dueDate");
  const prioritySelect = document.querySelector("#prioritySelect");
  const descriptionInput = document.querySelector("#description");
  const noteInput = document.querySelector("#note");
  const todoInputForm = document.querySelector("#todoInputForm");
  const projectInputForm = document.querySelector("#projectInputForm");
  const cancelAddNewTodoBtn = document.querySelector("#cancelAddTodoBtn");

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
    projectInputForm.addEventListener("submit", (e) => {
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
      e.preventDefault();
      console.log(projectData);
      updateData.updateProjectData(projectData);
    });
  };

  const addNewTodoController = () => {
    addNewTodoBtn.addEventListener("click", () => {
      todoInputModal.show();
      cancelAddTodoController();
    });
  };

  const cancelAddTodoController = () => {
    cancelAddNewTodoBtn.addEventListener("click", () => {
      todoInputModal.close();
    });
  };

  const saveTodoController = () => {
    todoInputForm.addEventListener("submit", (e) => {
      const { attribute, selectedProject } = getTodoInputValue();
      if (checkRequiredAttr(attribute) && selectedProject) {
        const todo = new Todo(attribute);
        putTodoToProject(todo, selectedProject);
        addTodo(todo);
        console.log(projectData, todoData);
        todoInputModal.close();
        e.preventDefault();
        updateData.updateTodoData(todoData);
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

  const putTodoToProject = (todo, selectedProject) => {
    for (const key in projectData) {
      if (key === selectedProject) {
        projectData[key].addTodo(todo);
      }
    }
  };

  const addTodo = (todo) => {
    todoData[todo.id] = todo;
  };

  const getTodoInputValue = () => {
    const todoName = todoNameInput.value;
    const selectedProject = projectSelect.value;
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
    return { attribute, selectedProject };
  };

  const getId = (attribute) => {
    const attributeArray = attribute.split("-");
    const id = attributeArray[1];
    return id;
  };

  const projectDetailController = () => {
    const projectDetailBtn = document.querySelectorAll(".detailBtn");
    projectDetailBtn.forEach((detailBtn) => {
      detailBtn.addEventListener("click", (e) => {
        const attr = e.target.id;
        const id = getId(attr);
        todoCard.renderCard(projectData[id], todoData, attribute.todoCard);
      });
    });
  };
  const listenToEvent = () => {
    createNewProjectController();
    addNewProjectController();
    addNewTodoController();
    saveTodoController();
    projectDetailController();
  };

  return { listenToEvent };
})();
