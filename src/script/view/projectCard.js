import { attribute } from "./attribute.js";
import { element } from "./createElement.js";

export const projectCard = (function () {
  const createCard = (project) => {
    const projectCard = attribute.projectCard;
    for (const key in projectCard) {
      const attr = element.setUniqueId(projectCard[key], project.id);
      element.createDom(attr, project);
    }
  };
  const renderCard = (data) => {
    for (const key in data) {
      createCard(data[key]);
    }
  };

  return { createCard, renderCard };
})();
