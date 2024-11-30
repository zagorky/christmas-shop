const burgerMenu = document.querySelector('.burger-menu');
const navigation = document.querySelector('.navigation');
const navLinks = document.querySelectorAll('.nav-a');
const TABLET_SCREEN_WIDTH = 769;

function toggleBurgerMenu() {
  if (window.innerWidth < TABLET_SCREEN_WIDTH) {
    burgerMenu.classList.toggle('open');
    toggleNav('open');
    toggleScroll('open');
  } else {
    toggleScroll('open');
  }
}
function toggleScroll(classValue) {
  if (burgerMenu.classList.contains(classValue)) {
    document.body.classList.add('blocked');
    changeTypographyClass('actionSmall', 'actionLarge');
  } else {
    document.body.classList.remove('blocked');
    changeTypographyClass('actionLarge', 'actionSmall');
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
  if (window.innerWidth > TABLET_SCREEN_WIDTH) {
    navigation.classList.remove('adaptiveNav');
    burgerMenu.classList.remove('open');
    document.body.classList.remove('blocked');

    changeTypographyClass('actionLarge', 'actionSmall');
  }
}

function changeTypographyClass(oldClass, newClass) {
  navLinks.forEach((elem) => {
    elem.classList.add(newClass);
    elem.classList.remove(oldClass);
  });
}

export default function initBurger() {
  burgerMenu.addEventListener('click', toggleBurgerMenu);
  navLinks.forEach((link) => {
    link.addEventListener('click', toggleBurgerMenu);
  });
  window.addEventListener('resize', checkSize);
}

export { TABLET_SCREEN_WIDTH };
