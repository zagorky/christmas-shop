export default function createElem(props) {
  const { nodeElem, cssClasses = [], attributes = {}, text } = props;
  const elem = document.createElement(nodeElem);
  elem.classList.add(...cssClasses);

  Object.entries(attributes).forEach(([key, value]) => {
    elem.setAttribute(key, value);
  });

  if (text) {
    elem.textContent = text;
  }
  return elem;
}
