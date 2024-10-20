const days = document.querySelector(".days h2");
const hours = document.querySelector(".hours h2");
const minutes = document.querySelector(".mins h2");
const seconds = document.querySelector(".secs h2");

function timer() {
  fillDates(days, countDays(calculateMSTillNY()));

  fillDates(hours, countHours(calculateMSTillNY()));

  fillDates(minutes, countMins(calculateMSTillNY()));

  fillDates(seconds, countSecs(calculateMSTillNY()));
}

setInterval(timer(), 1000);

function calculateMSTillNY() {
  let today = new Date();
  let NYDate = new Date(today.getFullYear(), 0, 1);
  let nextNY = NYDate.setFullYear(today.getFullYear() + 1);
  let ms = nextNY - today;
  return ms;
}
function countDays(ms) {
  let lastTimeDay = (ms / (1000 * 60 * 60 * 24)).toFixed(0);
  return lastTimeDay;
}
function countHours(ms) {
  let lastTimeHour = ((ms / (1000 * 60 * 60)) % 24).toFixed(0);
  return lastTimeHour;
}
function countMins(ms) {
  let lastTimeMin = ((ms / (1000 * 60)) % 60).toFixed(0);
  return lastTimeMin;
}
function countSecs(ms) {
  let lastTimeSec = ((ms / 1000) % 60).toFixed(0);
  return lastTimeSec;
}
function fillDates(value, func) {
  value.textContent = `${func} `;
}
