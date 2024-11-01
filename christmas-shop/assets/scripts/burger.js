const burgerMenu = document.querySelector(".burger-menu");
const burgerContainer = document.querySelector(".burger");
const navigation = document.querySelector(".navigation");

function toggleBurgerMenu() {
  if (window.innerWidth < 768) {
    burgerMenu.classList.toggle("open");
    toggleNav("open");
  }
}

function toggleNav(classValue) {
  if (classValue === "open") {
    navigation.classList.toggle("adaptiveNav");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  burgerMenu.addEventListener("click", toggleBurgerMenu);
});
