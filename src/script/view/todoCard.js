import { attribute } from "./attribute.js";
import { element } from "./createElement.js";

export const todoCard = (function () {
  const createCard = (todo, parentId) => {
    const todoCard = attribute.todoCard;
    for (const key in todoCard) {
      const attr = element.setUniqueId(todoCard[key], todo.id);
      const todoDataWithParentId = JSON.parse(JSON.stringify(todo));
      todoDataWithParentId.id = parentId;
      element.createDom(attr, todoDataWithParentId);
    }
  };
  return { createCard };
})();
