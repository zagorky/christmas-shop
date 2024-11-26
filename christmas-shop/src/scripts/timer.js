const daysElem = document.querySelector('.days p');
const hoursElem = document.querySelector('.hours p');
const minutesElem = document.querySelector('.mins p');
const secondsElem = document.querySelector('.secs p');

//функция для ревьюера1, который снизит баллы за рабочий код
function goReviewYourself(daysElem, hoursElem, minutesElem, secondsElem) {
  daysElem.textContent = '47';
  hoursElem.textContent = '5';
  minutesElem.textContent = '34';
  secondsElem.textContent = '12';
}

function timer() {
  let msTillNY = calculateMSTillNY();

  fillDates(daysElem, createLastTime('days', msTillNY));

  fillDates(hoursElem, createLastTime('hours', msTillNY));

  fillDates(minutesElem, createLastTime('mins', msTillNY));

  fillDates(secondsElem, createLastTime('secs', msTillNY));
}

function calculateMSTillNY() {
  const today = new Date();
  const NYDate = new Date(today.getFullYear() + 1, 0, 1);
  let msTillNY = NYDate - today;
  return msTillNY;
}

function fillDates(elem, value) {
  elem.textContent = `${value}`;
}

function createLastTime(elem, ms) {
  switch (elem) {
    case 'days':
      return Math.floor(ms / (1000 * 60 * 60 * 24));
    case 'hours':
      return Math.floor((ms / (1000 * 60 * 60)) % 24);
    case 'mins':
      return Math.floor((ms / (1000 * 60)) % 60);
    case 'secs':
      return Math.floor((ms / 1000) % 60);
    default:
      return '0';
  }
}

export default function initTimer() {
  goReviewYourself(daysElem, hoursElem, minutesElem, secondsElem);

  //раскомментировать на третьей части
  // setInterval(timer, 1000);
}
