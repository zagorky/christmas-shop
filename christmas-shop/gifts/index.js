import initGiftsGetData from '../src/scripts/giftsGetData';
import initUpButton from '../src/scripts/upButton';
import initBurger from '../src/scripts/burger';
import { categories } from '../src/scripts/giftsMenu';

window.addEventListener('load', () => {
  categories;
  initBurger();
  initGiftsGetData();
  initUpButton();
});
