import { TABLET_SCREEN_WIDTH } from './burger';

const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.left');
const nextBtn = document.querySelector('.right');

const sliderWidth = slider.scrollWidth;
let sliderVisibleWidth;
let OFFSET = 0;
let CURRENT_OFFSET = 0;

function setSliderVisibleWidth() {
  return (sliderVisibleWidth = slider.clientWidth);
}
function calculateSliderReplacing() {
  sliderVisibleWidth = setSliderVisibleWidth();
  return (OFFSET = (sliderWidth - sliderVisibleWidth) / changeNumbersOfClick());
}
function changeNumbersOfClick() {
  let NUMBER_OF_CLICK;
  if (window.innerWidth >= TABLET_SCREEN_WIDTH) {
    return (NUMBER_OF_CLICK = 3);
  } else {
    return (NUMBER_OF_CLICK = 6);
  }
}
function moveSlider(OFFSET) {
  slider.style.transform = `translateX(-${OFFSET}px)`;
}
function switchOffBnt() {
  const MAX_OFFSET = sliderWidth - sliderVisibleWidth;

  if (CURRENT_OFFSET <= 0) {
    switchClassName(prevBtn, 'inactiveNav', 'activeNav');
  } else {
    switchClassName(prevBtn, 'activeNav', 'inactiveNav');
  }

  if (CURRENT_OFFSET >= MAX_OFFSET) {
    switchClassName(nextBtn, 'inactiveNav', 'activeNav');
  } else {
    switchClassName(nextBtn, 'activeNav', 'inactiveNav');
  }
}

function switchClassName(elem, addClass, removeClass) {
  elem.classList.add(addClass);
  elem.classList.remove(removeClass);
}

export default function initSlider() {
  window.addEventListener('resize', () => {
    calculateSliderReplacing();
    moveSlider(OFFSET);
    switchOffBnt();
  });

  prevBtn.addEventListener('click', () => {
    calculateSliderReplacing();
    if (CURRENT_OFFSET > 0) {
      CURRENT_OFFSET -= OFFSET;
      moveSlider(CURRENT_OFFSET);
      switchOffBnt();
    }
    console.log('назад');
  });

  nextBtn.addEventListener('click', () => {
    calculateSliderReplacing();
    if (CURRENT_OFFSET < sliderWidth - sliderVisibleWidth) {
      CURRENT_OFFSET += OFFSET;
      moveSlider(CURRENT_OFFSET);
      switchOffBnt();
    }
    console.log('вперед');
  });

  setSliderVisibleWidth();
  calculateSliderReplacing();
  switchOffBnt();
}
