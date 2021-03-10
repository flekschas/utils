const XMLNS = 'http://www.w3.org/2000/svg';

/**
 * Method to add a class name to an HTML or SVG element.
 * @param {object} element - HTML or SVG element to add a class to.
 * @param {string} className - The class name to be added.
 */
export const addClass = (element, className) => {
  if (element.namespaceURI === XMLNS) {
    if (!hasClass(element, className)) {
      const klass = element.getAttribute('class') || '';
      element.setAttribute('class', `${klass} ${className}`);
    }
  } else if (element.classList) {
    element.classList.add(className);
  } else if (!hasClass(element, className)) {
    element.className += ` ${className}`;
  }
};

/**
 * Create HTML from a template string
 * @param {string} template - HTML template string
 * @return {node} Root DOM element
 */
export const createHtmlByTemplate = (template) => {
  const dummyEl = document.createElement('div');
  dummyEl.insertAdjacentHTML('beforeend', template);
  return dummyEl.firstChild;
};

/**
 * Check if an HTML or SVG element has a certain class
 * @param {object} element - HTML or SVG element to be checked
 * @param {string} className - Class name to be checked for
 * @return {boolean} If `true` `element` has the class name
 */
export const hasClass = (element, className) => {
  if (element.namespaceURI === XMLNS) {
    const klass = element.getAttribute('class');
    return klass && !!klass.match(new RegExp(`(\\s|^)${className}(\\s|$)`));
  }

  if (element.classList) return element.classList.contains(className);

  return !!element.className.match(new RegExp(`(\\s|^)${className}(\\s|$)`));
};

/**
 * Test whether a DOM element is the parent of another DOM element.
 *
 * @param {object} element - Potential child element.
 * @param {object} parent - Target parent element which is tested to have `el`
 *   as a child.
 * @return {boolean} If `true` `parent` is a parent of `element`.
 */
export const isParentOf = (element, parent) => {
  let el = element;

  while (el && el !== parent && el.tagName !== 'HTML') {
    el = el.parentNode;
  }

  return el === parent;
};

/**
 * Remove all children of a DOM node
 * @param {object} node - DOM node whose children are to be removed
 */
export const removeAllChildren = (node) => {
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
};

/**
 * Remove last child of a DOM node
 * @param {object} node - DOM node whose last child is to be removed
 */
export const removeLastChild = (node) => {
  node.removeChild(node.lastChild);
};

/**
 * Remove a class from an HTML or SVG element.
 * @param {object} element - HTML or SVG element.
 * @param {string} className - Class name to be removed.
 */
export const removeClass = (element, className) => {
  const reg = new RegExp(`(\\s|^)${className}(\\s|$)`);

  if (element.namespaceURI === XMLNS) {
    const klass = element.getAttribute('class') || '';
    element.setAttribute('class', klass.replace(reg, ' '));
  } else if (element.classList) {
    element.classList.remove(className);
  } else if (hasClass(element, className)) {
    element.className = element.className.replace(reg, ' ');
  }
};
