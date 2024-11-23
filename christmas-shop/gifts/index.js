import initGiftsMenu from '../src/scripts/giftsMenu';
// import initGiftsGetData from '../scripts/giftsGetData';
import initUpButton from '../src/scripts/upButton';
import initBurger from '../src/scripts/burger';

window.addEventListener('load', () => {
  initBurger();
  // initGiftsGetData();
  initGiftsMenu();
  initUpButton();
});
