// import giftsData from '../data/gifts.json';
import { Card } from './giftsGetData';

class Popup extends Card {
  constructor(cardProps, superpower) {
    super(cardProps);
    this.superpower = superpower;
  }
}

console.log(Popup);

// const overlay = document.querySelector('.overlay');

// function toggleOverlay(value) {
//   if (value === 'open') {
//     overlay.classList.toggle('open');
//   }
// }
