export default function createElem(props) {
  const {
    nodeElem,
    cssClasses = [],
    attributes = {},
    text,
    child,
    difficultChild,
  } = props;
  const elem = document.createElement(nodeElem);
  elem.classList.add(...cssClasses);

  Object.entries(attributes).forEach(([key, value]) => {
    elem.setAttribute(key, value);
  });
  if (text) {
    elem.textContent = text;
  }
  if (child) {
    elem.insertAdjacentHTML('afterbegin', `${child}`);
  }
  if (difficultChild) {
    const childElem = createElem(difficultChild);
    elem.append(childElem);
  }
  return elem;
}
