export const element = (function () {
  const createDom = (attribute, data) => {
    const parentElement = referenceElement(attribute, data.id);
    const newElement = document.createElement(attribute.newElement);
    appendUniqueText(attribute, data);
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

  const appendUniqueText = (attribute, data) => {
    if (attribute.hasOwnProperty("dataText")) {
      appendText(attribute, data);
    }
  };

  const appendText = (attribute, data) => {
    attribute.textContent = data[attribute.dataText];
  };

  return {
    createDom,
    setMultipleAttribute,
    setTextContent,
    setUniqueId,
  };
})();
