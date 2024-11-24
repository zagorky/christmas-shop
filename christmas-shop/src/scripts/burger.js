const burgerMenu = document.querySelector('.burger-menu');
// const burgerContainer = document.querySelector('.burger');
const navigation = document.querySelector('.navigation');
const navLinks = document.querySelectorAll('.nav-a');

function toggleBurgerMenu() {
  if (window.innerWidth < 769) {
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
  if (window.innerWidth > 768) {
    navigation.classList.remove('adaptiveNav');
    burgerMenu.classList.remove('open');
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
initBurger();
