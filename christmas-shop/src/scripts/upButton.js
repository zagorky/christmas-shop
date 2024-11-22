const upButton = document.createElement('a');

function createUpButton() {
  upButton.classList.add('upButton');
  upButton.href = '#top';
  upButton.title = 'Up';
  upButton.innerHTML = '&#129121;';
  document.body.appendChild(upButton);
  addUpButtonToPage();
}
function addUpButtonToPage() {
  window.addEventListener('scroll', checkScroll);
}
function checkScroll() {
  if (window.scrollY >= 200) {
    upButton.style.display = 'block';
  } else {
    upButton.style.display = 'none';
  }
}
function smoothScroll(event) {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', createUpButton);
upButton.addEventListener('click', smoothScroll);
export { createUpButton, smoothScroll, upButton };
