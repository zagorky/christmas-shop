import giftsData from '../data/gifts.json';
import { renderCards } from './giftsGetData';

function filterData(category) {
  let filteredGifts = giftsData.filter((gift) => {
    return gift.category === category;
  });
  return filteredGifts;
}

export default function initSorting(category) {
  clearContainer(document.querySelector('.cards-container'));
  const giftsToRender = checkPage(fillFilteredData(category));
  renderCards(giftsToRender);
}

function fillFilteredData(category) {
  let filteredData = category === 'All' ? giftsData : filterData(category);
  return filteredData;
}
function clearContainer(container) {
  container.innerHTML = '';
  console.log('я очистка');
}

function checkPage(gifts) {
  console.log('я проверка');

  if (window.location.href.includes('gifts')) {
    return gifts.slice(0, 12); // убрать слайс перед 3 частью
  }
  shuffleGifts(gifts);
  return gifts.slice(0, 4);
}

function shuffleGifts(gifts) {
  for (let i = gifts.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [gifts[i], gifts[j]] = [gifts[j], gifts[i]];
  }
}
