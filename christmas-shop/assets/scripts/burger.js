const burgerMenu = document.querySelector(".burger-menu");
const burgerContainer = document.querySelector(".burger");
const navigation = document.querySelector(".navigation");

function toggleBurgerMenu() {
  if (window.innerWidth < 768) {
    burgerMenu.classList.toggle("open");
    toggleNav("open");
    toggleScroll("open");
  } else {
    toggleScroll("open");
  }
}

function toggleScroll(classValue) {
  if (burgerMenu.classList.contains(classValue)) {
    document.body.classList.add("blocked");
  } else {
    document.body.classList.remove("blocked");
  }
}
function toggleNav(classValue) {
  if (burgerMenu.classList.contains(classValue)) {
    navigation.classList.toggle("adaptiveNav");
  } else {
    navigation.classList.toggle("adaptiveNav");
  }
}

function checkSize() {
  if (window.innerWidth > 768) {
    navigation.classList.remove("adaptiveNav");
    burgerMenu.classList.remove("open");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  burgerMenu.addEventListener("click", toggleBurgerMenu);
});
document.addEventListener("resize", checkSize);
