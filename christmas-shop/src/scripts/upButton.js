import createElem from './helper';

const upButton = createElem({
  nodeElem: 'a',
  cssClasses: ['upButton'],
  attr: { href: '#top', title: 'Up' },
  child: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5V19" stroke="#FF4646" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 11L12 5" stroke="#FF4646" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 11L12 5" stroke="#FF4646" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
});

function createUpButton() {
  document.body.append(upButton);
  addUpButtonToPage();
}

function addUpButtonToPage() {
  window.addEventListener('scroll', checkScroll);
}

function checkScroll() {
  const SCROLL_DOWN_OFFSET = 300;
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
