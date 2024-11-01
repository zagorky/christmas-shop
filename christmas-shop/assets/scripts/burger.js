const burgerMenu = document.querySelector(".burger-menu");
const burgerContainer = document.querySelector(".burger");
const overlay = document.querySelector(".overlay");
function toggleBurgerMenu() {
  burgerMenu.classList.toggle("open");
  toggleOverlay("open");
}

function toggleOverlay(value) {
  if (value === "open") {
    overlay.classList.toggle("open");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  burgerMenu.addEventListener("click", toggleBurgerMenu);
});
