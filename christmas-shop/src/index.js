import initBurger from './scripts/burger';
import initGiftsGetData from './scripts/giftsGetData';
// import initUpButton from './scripts/upButton';
import initTimer from './scripts/timer';
import initSlider from './scripts/slider';

window.addEventListener('load', () => {
  initBurger();
  initGiftsGetData();
  initSlider();
  initTimer();
  // initUpButton();
});
