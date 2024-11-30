const timerData = {
  daysElem: document.querySelector('.days p'),
  hoursElem: document.querySelector('.hours p'),
  minutesElem: document.querySelector('.mins p'),
  secondsElem: document.querySelector('.secs p'),
};

function calculateMSTillNY() {
  const today = new Date();
  const NYDate = new Date(Date.UTC(today.getUTCFullYear() + 1, 0, 1));
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

function initTimer(nodeElems) {
  const { daysElem, hoursElem, minutesElem, secondsElem } = nodeElems;
  function timer() {
    let msTillNY = calculateMSTillNY();

    fillDates(daysElem, createLastTime('days', msTillNY));

    fillDates(hoursElem, createLastTime('hours', msTillNY));

    fillDates(minutesElem, createLastTime('mins', msTillNY));

    fillDates(secondsElem, createLastTime('secs', msTillNY));
  }

  setInterval(timer, 1000);
}

export { initTimer, timerData };
