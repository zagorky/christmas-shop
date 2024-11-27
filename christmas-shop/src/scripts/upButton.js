import createElem from './helper';

const upButton = createElem({
  nodeElem: 'a',
  cssClasses: ['upButton'],
  attr: { href: '#top', title: 'Up' },
  text: '\u{1f861}',
});

function createUpButton() {
  document.body.append(upButton);
  addUpButtonToPage();
}

function addUpButtonToPage() {
  window.addEventListener('scroll', checkScroll);
}

function checkScroll() {
  const SCROLL_DOWN_OFFSET = 200;
  if (window.scrollY >= SCROLL_DOWN_OFFSET) {
    upButton.style.display = 'block';
  } else {
    upButton.style.display = 'none';
  }
}

function scrollToTop(event) {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

export default function initUpButton() {
  createUpButton();
  upButton.addEventListener('click', scrollToTop);
}
