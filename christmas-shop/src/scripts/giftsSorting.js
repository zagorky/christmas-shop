import giftsData from '../data/gifts.json';
import { renderCards, checkPage, clearContainer } from './giftsGetData';

function filterData(category) {
  let filteredGifts = giftsData.filter((gift) => {
    return gift.category == category;
  });
  return filteredGifts;
}

export default function sortAndRenderData(category) {
  clearContainer(document.querySelector('.cards-container'));

  let filteredGifts = category === 'All' ? giftsData : filterData(category);
  const giftsToRender = checkPage(filteredGifts);
  renderCards(giftsToRender);
}
