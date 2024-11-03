const upButton = document.createElement("a");

upButton.classList.add("backToTop");
upButton.href = "#top";
upButton.title = "Back-to-Top";
upButton.innerHTML = "&#129121;";
document.body.appendChild(upButton);

function addUpButtonToPage() {
  window.addEventListener("scroll", checkScroll);
}

function checkScroll() {
  if (window.scrollY >= 200) {
    upButton.style.display = "block";
  } else {
    upButton.style.display = "none";
  }
}

function smoothScroll(event) {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", addUpButtonToPage);
upButton.addEventListener("click", smoothScroll);
