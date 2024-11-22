const overlay = document.querySelector(".overlay");

function toggleOverlay(value) {
  if (value === "open") {
    overlay.classList.toggle("open");
  }
}
