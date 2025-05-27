export const element = (function () {
  const createDom = (attribute) => {
    const parentElement = document.querySelector(attribute.parentElement);
    const newElement = document.createElement(attribute.newElement);
    setMultipleAttribute(newElement, attribute.newElementAttribute);
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
  return { createDom, setMultipleAttribute, setTextContent };
})();
