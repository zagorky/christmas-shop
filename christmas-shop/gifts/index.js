// import initGiftsGetData from '../scripts/giftsGetData';
// import initUpButton from '../src/scripts/upButton';
import initBurger from '../src/scripts/burger';
import initSorting from '../src/scripts/giftsSorting';
import {
  categoryALL,
  categoryForHarmony,
  categoryForHealth,
  categoryForWork,
} from '../src/scripts/giftsMenu';

window.addEventListener('load', () => {
  initBurger();
  // initGiftsGetData();
  // initUpButton();
  initSorting();
  categoryALL, categoryForHarmony, categoryForHealth, categoryForWork;
});
