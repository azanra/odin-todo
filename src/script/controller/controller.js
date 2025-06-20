import {
  increaseLastId,
  lastId,
  projectData,
  todoData,
  updateData,
  updateTodoData,
} from "../../mainData.js";
import Project from "../model/project.js";
import Todo from "../model/todo.js";
import { attribute } from "../view/attribute.js";
import { element } from "../view/createElement.js";
import { projectCard } from "../view/projectCard.js";
import { todoCard } from "../view/todoCard.js";

export const controller = (function () {
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
      const latestId = lastId;
      increaseLastId();
      const attribute = {
        name: nameInput,
        id: latestId,
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
      updateData.updateLastId(lastId);
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
        todoData[todo.id] = todo;
        console.log(projectData, todoData);
        todoInputModal.close();
        e.preventDefault();
        updateData.updateTodoData(todoData);
        updateData.updateLastId(lastId);
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

  const getTodoInputValue = () => {
    const todoId = lastId;
    increaseLastId();
    const todoName = todoNameInput.value;
    const selectedProject = projectSelect.value;
    const dueDate = dueDateInput.value;
    const priority = prioritySelect.value;
    const description = descriptionInput.value;
    const note = noteInput.value;
    const attribute = {
      id: todoId,
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

  const projectDetailShowController = () => {
    const projectDetailBtn = document.querySelectorAll(".detailBtn");
    projectDetailBtn.forEach((detailBtn) => {
      detailBtn.addEventListener("click", (e) => {
        const attr = e.target.id;
        const id = getId(attr);
        todoCard.renderCard(projectData[id], todoData, attribute.todoCard);
        todoCard.renderHideProjectBtn(projectData[id]);
        detailBtn.disabled = true;
        projectDetailHideController(detailBtn, id);
        todoDetailController();
      });
    });
  };

  const projectDetailHideController = (detailBtn, id) => {
    const hideDetailBtn = document.querySelector(`#hideProjectDetailBtn-${id}`);
    const projectChildContainer = document.querySelector(
      `#projectChildContainer-${id}`
    );
    hideDetailBtn.addEventListener("click", (e) => {
      projectChildContainer.replaceChildren();
      e.target.parentElement.remove();
      detailBtn.disabled = false;
    });
  };

  const deleteTodoController = () => {
    const deleteTodoBtn = document.querySelectorAll(".todoDeleteBtn");
    deleteTodoBtn.forEach((deleteBtn) => {
      deleteBtn.addEventListener("click", deleteEvent);
    });
  };

  const deleteEvent = (e) => {
    const attr = e.target.id;
    const id = getId(attr);
    deleteTodoFromProject(id);
    deleteTodoData(id);
    element.removeElement(`#todoContainer-${id}`);
  };

  const deleteTodoFromProject = (id) => {
    const project = findProject(id);
    project.deleteList(Number(id));
    console.log(projectData);
    updateData.updateProjectData(projectData);
  };

  const deleteTodoData = (id) => {
    const { [id]: deletedTodo, ...updatedTodo } = todoData;
    console.log(deletedTodo);
    console.log(updatedTodo);
    updateTodoData(updatedTodo);
    updateData.updateTodoData(updatedTodo);
  };

  const findProject = (id) => {
    for (const key in projectData) {
      if (projectData[key].list.includes(Number(id))) {
        return projectData[key];
      }
    }
  };

  const todoDetailController = () => {
    const todoDetailBtn = document.querySelectorAll(".todoDetailBtn");
    todoDetailBtn.forEach((item) => {
      item.addEventListener("click", todoDetailEvent);
    });
  };

  const todoDetailEvent = (e) => {
    const attr = e.target.id;
    const id = getId(attr);
    const todo = todoData[id];
    todoCard.createCard(todo, null, attribute.todoDetail);
    populateSelectTodoPriority(todo);
    saveTodoDetailController();
    deleteTodoController();
    e.target.parentElement.remove();
  };

  const populateSelectTodoPriority = (todo) => {
    const selectElement = document.querySelector(
      `#todoSelectPriority-${todo.id}`
    );
    const priority = ["Low", "Medium", "High"];
    priority.map((item) => {
      const priorityOption = document.createElement("option");
      priorityOption.setAttribute("value", item.toLowerCase());
      chooseAsSelected(priorityOption, todo, item);
      priorityOption.textContent = item;
      selectElement.append(priorityOption);
    });
  };

  const chooseAsSelected = (element, todo, option) => {
    if (todo.priority && todo.priority.toLowerCase() === option.toLowerCase()) {
      element.setAttribute("selected", "");
    }
  };

  const saveTodoDetailController = () => {
    const saveTodo = document.querySelectorAll(".todoSaveBtn");
    saveTodo.forEach((item) => {
      item.addEventListener("click", savetodoDetailEvent);
    });
  };

  const savetodoDetailEvent = (e) => {
    const attr = e.target.id;
    const id = getId(attr);
    const userInput = getUserEdit(id);
    todoData[id] = updateTodoAttribute(todoData[id], userInput);
    alert("Todo Updated!");
    updateData.updateTodoData(todoData);
    console.log(todoData);
    console.log(userInput);
  };

  const updateTodoAttribute = (todo, updatedAttr) => {
    for (const key in updatedAttr) {
      todo.setAttribute(key, updatedAttr[key]);
    }
    return todo;
  };

  const getUserEdit = (id) => {
    const done = getDone(id);
    const title = getTitle(id);
    const priority = getPriority(id);
    const description = getDescription(id);
    const note = getNote(id);
    return { done, title, priority, description, note };
  };

  const getDone = (id) => {
    const checklist = document.querySelector(`#todoChecklist-${id}`);
    if (checklist.checked) {
      return true;
    } else {
      return false;
    }
  };

  const getTitle = (id) => {
    const titleInput = document.querySelector(`#todoTitleEdit-${id}`);
    return titleInput.value;
  };

  const getPriority = (id) => {
    const selectInput = document.querySelector(`#todoSelectPriority-${id}`);
    return selectInput.value;
  };

  const getDescription = (id) => {
    const detailInput = document.querySelector(`#todoDetailedDesc-${id}`);
    return detailInput.value;
  };

  const getNote = (id) => {
    const noteInput = document.querySelector(`#todoNote-${id}`);
    return noteInput.value;
  };

  const listenToEvent = () => {
    createNewProjectController();
    addNewProjectController();
    addNewTodoController();
    saveTodoController();
    projectDetailShowController();
  };

  return { listenToEvent };
})();
