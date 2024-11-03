const slider = document.querySelector(".slider");

function changeNumbersOfClick() {
  if (window.innerWidth <= 768) {
  } else if (window.innerWidth <= 380) {
  } else {
  }
}

window.addEventListener("resize", changeNumbersOfClick);
