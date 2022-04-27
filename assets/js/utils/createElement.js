function createElement(tagName, options, ...children) {
  const { classNames = [], attributes = {} } = options;
  const elem = document.createElement(tagName);

  for (let i = 0; i < classNames.length; i++) {
    elem.classList.add(classNames[i]);
  }

  /*
    attributes = {
      src: 'http:///cdgvfdv',
      alt: 'test pic'
    }

  */

  for (const attributePair of Object.entries(attributes)) {
    const [attributeKey, attributeValue] = attributePair;
    elem.setAttribute(attributeKey, attributeValue);
  }

  elem.append(...children);

  return elem;
}
