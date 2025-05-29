export const element = (function () {
  const createDom = (attribute, project) => {
    const parentElement = referenceElement(attribute, project.id);
    const newElement = document.createElement(attribute.newElement);
    setMultipleAttribute(newElement, attribute.elementAttribute);
    setTextContent(newElement, attribute.textContent);
    parentElement.append(newElement);
  };

  const setMultipleAttribute = (element, attribute) => {
    for (const key in attribute) {
      element.setAttribute(key, attribute[key]);
    }
  };

  const setTextContent = (element, elementTextContent) => {
    if (elementTextContent) {
      element.textContent = elementTextContent;
    }
  };

  const setUniqueId = (attribute, id) => {
    if (attribute.uniqueElement === true) {
      const copyAttribute = JSON.parse(JSON.stringify(attribute));
      copyAttribute.elementAttribute.id = `${copyAttribute.elementAttribute.class}-${id}`;
      return copyAttribute;
    } else {
      return attribute;
    }
  };

  const referenceElement = (attribute, id) => {
    if (attribute.uniqueParent === true && id) {
      return document.querySelector(`${attribute.parentElement}-${id}`);
    } else {
      return document.querySelector(attribute.parentElement);
    }
  };

  return {
    createDom,
    setMultipleAttribute,
    setTextContent,
    setUniqueId,
  };
})();
