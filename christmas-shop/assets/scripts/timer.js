const days = document.querySelector(".days p");
const hours = document.querySelector(".hours p");
const minutes = document.querySelector(".mins p");
const seconds = document.querySelector(".secs p");

function timer() {
  fillDates(days, createLastTime("days", calculateMSTillNY()));

  fillDates(hours, createLastTime("hours", calculateMSTillNY()));

  fillDates(minutes, createLastTime("mins", calculateMSTillNY()));

  fillDates(seconds, createLastTime("secs", calculateMSTillNY()));
}
function calculateMSTillNY() {
  let today = new Date();
  let NYDate = new Date(today.getFullYear(), 0, 1);
  let nextNY = NYDate.setFullYear(today.getFullYear() + 1);
  let ms = nextNY - today;
  return ms;
}
function fillDates(elem, value) {
  elem.textContent = `${value} `;
}
function createLastTime(unit, ms) {
  switch (unit) {
    case "days":
      return (ms / (1000 * 60 * 60 * 24)).toFixed(0);
    case "hours":
      return ((ms / (1000 * 60 * 60)) % 24).toFixed(0);
    case "mins":
      return ((ms / (1000 * 60)) % 60).toFixed(0);
    case "secs":
      return ((ms / 1000) % 60).toFixed(0);
    default:
      return "0";
  }
}

setInterval(timer, 1000);
