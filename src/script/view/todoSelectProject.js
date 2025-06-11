import { attribute } from "./attribute.js";
import { element } from "./createElement.js";

export const todoSelectProject = (function () {
  const populateOption = (project) => {
    const attr = attribute.todoSelectProject;
    for (const key in attr) {
      {
        const valueAttr = appendValueToAttribute(attr[key], project);
        element.createDom(valueAttr, project);
      }
    }
  };

  const renderOption = (project) => {
    for (const key in project) {
      populateOption(project[key]);
    }
  };

  const appendValueToAttribute = (attribute, data) => {
    const newAttribute = JSON.parse(JSON.stringify(attribute));
    newAttribute.elementAttribute.value = data.id;
    newAttribute.textContent = data.name;
    return newAttribute;
  };

  return { renderOption };
})();
