import { attribute } from "./attribute.js";
import { element } from "./createElement.js";

export const todoCard = (function () {
  const createCard = (todo, parentId) => {
    const todoCard = attribute.todoCard;
    for (const key in todoCard) {
      const attr = element.setUniqueId(todoCard[key], todo.id);
      element.createDom(
        attr,
        appendTodoToProject(attr.elementAttribute, todo, parentId)
      );
    }
  };

  const appendTodoToProject = (attribute, todo, parentId) => {
    if (attribute.class === "todoContainer") {
      const todoDataWithParentId = JSON.parse(JSON.stringify(todo));
      todoDataWithParentId.id = parentId;
      return todoDataWithParentId;
    } else {
      return todo;
    }
  };

  const renderCard = (project, todo) => {
    for (const key in project) {
      project[key].list.map((item) => {
        createCard(todo[item], project[key].id);
      });
    }
  };

  return { createCard, renderCard };
})();
