import initBurger from './scripts/burger';
import initGiftsGetData from '../src/scripts/giftsGetData';
import { initTimer, timerData } from './scripts/timer';
import initSlider from './scripts/slider';

window.addEventListener('load', () => {
  initBurger();
  initGiftsGetData();
  initTimer(timerData);
  initSlider();
});
