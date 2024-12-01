import { sliderItemsData } from '../data/sliderData';
import { TABLET_SCREEN_WIDTH } from './burger';
import createElem from './helper';

const sliderContainer = document.querySelector('.slider');
const buttonContainer = document.querySelector('.bnt-container');

const leftBtn = createElem({
  nodeElem: 'button',
  cssClasses: ['left', 'btn', 'inactiveNav'],
  child: `                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 7H13.5M13.5 7L7.5 1M13.5 7L7.5 13"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>`,
});

const rightBtn = createElem({
  nodeElem: 'button',
  cssClasses: ['right', 'btn'],
  child: `<svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 7H13.5M13.5 7L7.5 1M13.5 7L7.5 13"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>`,
});

const TOTAL_SLIDER_WIDTH = 2148;
console.log(TOTAL_SLIDER_WIDTH);

let currentOffset = 0;

function moveSlider(direction) {
  let visibleSliderWidth = sliderContainer.offsetWidth;
  let offset = calculateOffset(visibleSliderWidth);
  let directionValue = direction === 'left' ? offset : -offset;

  currentOffset += directionValue;
  currentOffset = Math.min(
    Math.max(currentOffset, -(TOTAL_SLIDER_WIDTH - visibleSliderWidth)),
    0,
  );

  sliderContainer.style.transform = `translateX(${currentOffset}px)`;
  updateButtonState();
}

function calculateOffset(visibleSliderWidth) {
  let numberOfClicks = visibleSliderWidth < TABLET_SCREEN_WIDTH ? 6 : 3;
  let offset = (TOTAL_SLIDER_WIDTH - visibleSliderWidth) / numberOfClicks;
  return offset;
}

function updateButtonState() {
  leftBtn.classList.toggle('inactiveNav', currentOffset === 0);
  rightBtn.classList.toggle(
    'inactiveNav',
    currentOffset <= -(TOTAL_SLIDER_WIDTH - sliderContainer.offsetWidth),
  );
}

export default function initSlider() {
  sliderItemsData.forEach((elem) => {
    const sliderElem = createElem(elem);
    sliderContainer.append(sliderElem);
  });

  buttonContainer.append(leftBtn, rightBtn);

  window.addEventListener('resize', () => {
    sliderContainer.style.transform = `translateX(0)`;
    currentOffset = 0;
    updateButtonState();
  });

  rightBtn.addEventListener('click', () => {
    moveSlider('right');
  });
  leftBtn.addEventListener('click', () => {
    moveSlider('left');
  });
  updateButtonState();
}
