import initGiftsGetData from '../src/scripts/giftsGetData';
// import initUpButton from '../src/scripts/upButton';
import initBurger from '../src/scripts/burger';
import initSorting from '../src/scripts/giftsSorting';
import initGiftMenu from '../src/scripts/giftsMenu';

window.addEventListener('load', () => {
  initGiftMenu();
  initBurger();
  initGiftsGetData();
  // initUpButton();
  initSorting();
});
