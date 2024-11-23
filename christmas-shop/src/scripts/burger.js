const burgerMenu = document.querySelector('.burger-menu');
const burgerContainer = document.querySelector('.burger');
const navigation = document.querySelector('.navigation');
const navLinks = document.querySelectorAll('.nav-a');

function toggleBurgerMenu() {
  if (window.innerWidth < 768) {
    burgerMenu.classList.toggle('open');
    burgerMenu.classList.toggle('actionLarge'); // пока не работает, подумать
    toggleNav('open');
    toggleScroll('open');
  } else {
    toggleScroll('open');
  }
}
function toggleScroll(classValue) {
  if (burgerMenu.classList.contains(classValue)) {
    document.body.classList.add('blocked');
  } else {
    document.body.classList.remove('blocked');
  }
}
function toggleNav(classValue) {
  if (burgerMenu.classList.contains(classValue)) {
    navigation.classList.toggle('adaptiveNav');
  } else {
    navigation.classList.toggle('adaptiveNav');
  }
}

function checkSize() {
  if (window.innerWidth > 768) {
    navigation.classList.remove('adaptiveNav');
    burgerMenu.classList.remove('open');
  }
}

export default function initBurger() {
  document.addEventListener('DOMContentLoaded', () => {
    burgerMenu.addEventListener('click', toggleBurgerMenu);
    navLinks.forEach((link) => {
      link.addEventListener('click', toggleBurgerMenu);
    });
  });
  window.addEventListener('resize', checkSize);
}
initBurger();
