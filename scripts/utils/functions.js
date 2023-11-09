/**
 * @param element {HTMLElement}
 * @param label {string}
 */
const setAriaLabel = (element, label) => {
  element.setAttribute("aria-label", label);
};

/**
 *
 * @param element {HTMLElement}
 * @param name {string}
 */
const setClassNameArticle = (element, name) => {
  element.className = `photographer_section__article${name}`;
};

/**
 *
 * @param element {HTMLElement}
 * @param text {string}
 */
const setTextContent = (element, text) => {
  element.textContent = text;
};

const setAppendChild = (parent, child) => {
  parent.appendChild(child);
};

