const burgerMenu = document.querySelector('.burger-menu');
const navigation = document.querySelector('.navigation');
const navLinks = document.querySelectorAll('.nav-a');
const TABLET_SCREEN_WIDTH = 769;

function toggleBurgerMenu() {
  if (window.innerWidth < TABLET_SCREEN_WIDTH) {
    addClasses();
  } else {
    removeClasses();
  }
}

function addClasses() {
  burgerMenu.classList.toggle('open');
  document.body.classList.toggle('blocked');
  changeTypographyClass('actionSmall', 'actionLarge');
  navigation.classList.toggle('adaptiveNav');
}

function checkSize() {
  if (window.innerWidth > TABLET_SCREEN_WIDTH) {
    removeClasses();
  }
}

function removeClasses() {
  burgerMenu.classList.remove('open');
  document.body.classList.remove('blocked');
  navigation.classList.remove('adaptiveNav');
  changeTypographyClass('actionLarge', 'actionSmall');
}

function changeTypographyClass(oldClass, newClass) {
  navLinks.forEach((elem) => {
    elem.classList.add(newClass);
    elem.classList.remove(oldClass);
  });
}

export default function initBurger() {
  burgerMenu.addEventListener('click', () => {
    toggleBurgerMenu();
  });
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      toggleBurgerMenu();
      document.body.classList.remove('blocked');
    });
  });
  window.addEventListener('resize', () => {
    checkSize();
  });
}

export { TABLET_SCREEN_WIDTH };
