import {
  burgerMenu,
  navLinks,
  toggleBurgerMenu,
  checkSize,
} from './scripts/burger';

import { url, renderCards, shuffleGifts, gifts } from './scripts/giftsGetData';

import { MenuElem, menu } from './scripts/giftsMenu';

import { createUpButton, smoothScroll, upButton } from './scripts/upButton';

import {
  goReviewYourself,
  // timer,
  days,
  hours,
  minutes,
  seconds,
} from './scripts/timer';

import {
  setSliderVisibleWidth,
  calculateSliderReplacing,
  switchOffBnt,
  prevBtn,
  nextBtn,
} from './scripts/slider';

// burger

document.addEventListener('DOMContentLoaded', () => {
  burgerMenu.addEventListener('click', toggleBurgerMenu);
  navLinks.forEach((link) => {
    link.addEventListener('click', toggleBurgerMenu);
  });
});
window.addEventListener('resize', checkSize);

//giftsGetData

fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error('error' + response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    gifts = data;

    shuffleGifts(gifts);
    renderCards(gifts);
  })
  .catch((error) => console.error(error));

//slider

window.addEventListener('resize', () => {
  calculateSliderReplacing();
  moveSlider(offset);
  switchOffBnt();
});

prevBtn.addEventListener('click', () => {
  calculateSliderReplacing();
  if (currentOffset > 0) {
    currentOffset -= offset;
    moveSlider(currentOffset);
    switchOffBnt();
  }
});

nextBtn.addEventListener('click', () => {
  calculateSliderReplacing();
  if (currentOffset < sliderWidth - sliderVisibleWidth) {
    currentOffset += offset;
    moveSlider(currentOffset);
    switchOffBnt();
  }
});

setSliderVisibleWidth();
calculateSliderReplacing();
switchOffBnt();

//timer

goReviewYourself(days, hours, minutes, seconds);

//раскомментировать на третьей части
// setInterval(timer, 1000);

// upButton

document.addEventListener('DOMContentLoaded', createUpButton);
upButton.addEventListener('click', smoothScroll);

//giftsMenu

MenuElem.clearMenu(menu);
const categoryAll = new MenuElem('all', true);
const categoryForWork = new MenuElem('forWork', false);
const categoryForHealth = new MenuElem('forHealth', false);
const categoryForHarmony = new MenuElem('forHarmony', false);
