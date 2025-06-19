import { attribute } from "./attribute.js";
import { element } from "./createElement.js";

export const todoCard = (function () {
  const createCard = (todo, parentId, elementAttribute) => {
    for (const key in elementAttribute) {
      let attr = element.setUniqueId(elementAttribute[key], todo.id);
      attr = setCheckeckInput(attr, todo);
      element.createDom(
        appendDueDate(attr, todo),
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

  const setCheckeckInput = (attribute, todo) => {
    if (attribute.elementAttribute.class === "todoChecklist" && todo.done) {
      attribute.elementAttribute.checked = "";
    }
    return attribute;
  };

  const appendDueDate = (attribute, todo) => {
    if (attribute.elementAttribute.class === "todoDueDate") {
      const attributeWithDueDate = JSON.parse(JSON.stringify(attribute));
      attributeWithDueDate.textContent = todo.getDueDate();
      return attributeWithDueDate;
    } else {
      return attribute;
    }
  };

  const renderCard = (project, todo, attribute) => {
    project.list.map((item) => {
      createCard(todo[item], project.id, attribute);
    });
  };

  const renderHideProjectBtn = (project) => {
    const attr = attribute.hideProjectDetail;
    for (const key in attr) {
      const uniqueAttr = element.setUniqueId(attr[key], project.id);
      element.createDom(uniqueAttr, project);
    }
  };

  return { createCard, renderCard, renderHideProjectBtn };
})();
