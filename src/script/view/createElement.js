export const element = (function () {
  const createDom = (attribute, data) => {
    const parentElement = referenceElement(attribute, data.id);
    const newElement = document.createElement(attribute.newElement);
    appendUniqueText(attribute, data);
    changePriorityColor(newElement, attribute, data);
    setMultipleAttribute(newElement, attribute.elementAttribute);
    setTextContent(newElement, attribute.textContent);
    parentElement.append(newElement);
  };

  const changePriorityColor = (element, attribute, data) => {
    if (attribute.elementAttribute.class === "todoPriority") {
      if (data.type === "todo" && data.priority.toLowerCase() === "low") {
        element.style.color = "green";
      } else if (
        data.type === "todo" &&
        data.priority.toLowerCase() === "medium"
      ) {
        element.style.color = "yellow";
      } else if (
        data.type === "todo" &&
        data.priority.toLowerCase() === "high"
      ) {
        element.style.color = "red";
      }
    }
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

  const appendUniqueText = (attribute, data) => {
    if (attribute.hasOwnProperty("dataText")) {
      appendText(attribute, data);
    }
  };

  const appendText = (attribute, data) => {
    attribute.textContent = data[attribute.dataText];
  };

  const removeElementChildren = (query) => {
    const element = document.querySelector(query);
    if (element) {
      element.replaceChildren();
    }
  };

  const removeElement = (query) => {
    const element = document.querySelector(query);
    if (element) {
      element.remove();
    }
  };

  return {
    createDom,
    setMultipleAttribute,
    setTextContent,
    setUniqueId,
    removeElementChildren,
    removeElement,
  };
})();
