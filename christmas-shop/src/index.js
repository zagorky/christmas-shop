import initBurger from './scripts/burger';
// import initGiftsGetData from './scripts/giftsGetData';
// import initUpButton from './scripts/upButton';
import initTimer from './scripts/timer';
import initSlider from './scripts/slider';
// import initGiftsMenu from './scripts/giftsMenu';

window.addEventListener('load', () => {
  checkPath();
});

function checkPath() {
  if (window.location.href.includes('gifts')) {
    initBurger();
    // initGiftsGetData();
    // initGiftsMenu();
    // initUpButton();
  }
  initBurger();
  // initGiftsGetData();
  initSlider();
  initTimer();
}
