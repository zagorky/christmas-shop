import initGiftsGetData from '../src/scripts/giftsGetData';
// import initUpButton from '../src/scripts/upButton';
import initBurger from '../src/scripts/burger';
import initGiftMenu from '../src/scripts/giftsMenu';

window.addEventListener('load', () => {
  initGiftMenu();
  initBurger();
  initGiftsGetData();
  // initUpButton();
});
