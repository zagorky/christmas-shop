// Implementation of the Category switching for products on the gifts page: +8
// The ALL category is active and all gifts are displayed when opening or reloading the gifts page: +2
// When switching categories, the gifts of the selected category are displayed: +4
import giftsData from '../data/gifts.json';
import { clearContainer, renderCards } from './giftsGetData';

const radioCategoryAll = document.getElementById('all');
const radioCategoryForHealth = document.getElementById('forHealth');
const radioCategoryForWork = document.getElementById('forWork');
const radioCategoryForHarmony = document.getElementById('forHarmony');

const radioMenu = document.querySelectorAll('input[type="radio"][name="menu"]');

export default function initSorting() {
  radioMenu.forEach((elem) => {
    elem.addEventListener('change', () => {
      clearContainer(document.querySelector('.cards-container'));
      if (radioCategoryAll.checked) {
        renderCards(giftsData);
      } else if (radioCategoryForHealth.checked) {
        filterData('For Health');
      } else if (radioCategoryForWork.checked) {
        filterData('For Work');
      } else if (radioCategoryForHarmony.checked) {
        filterData('For Harmony');
      }
    });
  });
  function filterData(category) {
    const filtederGifts = giftsData.filter((gift) => {
      gift.category === category;
    });
    renderCards(filtederGifts);
  }
  renderCards(giftsData);
}
