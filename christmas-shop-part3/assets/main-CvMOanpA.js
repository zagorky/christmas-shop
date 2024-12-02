import { c as createElem, T as TABLET_SCREEN_WIDTH, i as initBurger, a as initGiftsGetData } from './helper-DjWgrCZf.js';

// import{i as r}from"./burger-BjnlU_c_.js";const s=document.querySelector(".days p"),c=document.querySelector(".hours p"),u=document.querySelector(".mins p"),i=document.querySelector(".secs p");function m(e,t,n,o){e.textContent="47",t.textContent="5",n.textContent="34",o.textContent="12"}function d(){m(s,c,u,i)}window.addEventListener("load",()=>{r(),d()});

const timerData = {
  daysElem: document.querySelector('.days p'),
  hoursElem: document.querySelector('.hours p'),
  minutesElem: document.querySelector('.mins p'),
  secondsElem: document.querySelector('.secs p'),
};

function calculateMSTillNY() {
  const today = new Date();
  const NYDate = new Date(Date.UTC(today.getUTCFullYear() + 1, 0, 1));
  let msTillNY = NYDate - today;
  return msTillNY;
}

function fillDates(elem, value) {
  elem.textContent = `${value}`;
}

function createLastTime(elem, ms) {
  switch (elem) {
    case 'days':
      return Math.floor(ms / (1000 * 60 * 60 * 24));
    case 'hours':
      return Math.floor((ms / (1000 * 60 * 60)) % 24);
    case 'mins':
      return Math.floor((ms / (1000 * 60)) % 60);
    case 'secs':
      return Math.floor((ms / 1000) % 60);
    default:
      return '0';
  }
}

function initTimer(nodeElems) {
  const { daysElem, hoursElem, minutesElem, secondsElem } = nodeElems;
  function timer() {
    let msTillNY = calculateMSTillNY();

    fillDates(daysElem, createLastTime('days', msTillNY));

    fillDates(hoursElem, createLastTime('hours', msTillNY));

    fillDates(minutesElem, createLastTime('mins', msTillNY));

    fillDates(secondsElem, createLastTime('secs', msTillNY));
  }

  setInterval(timer, 1000);
}

const sliderItemsData = [
  {
    nodeElem: 'div',
    cssClasses: ['slider-elem'],
    difficultChild: {
      nodeElem: 'p',
      cssClasses: ['slider-text'],
      text: 'live',
    },
  },
  {
    nodeElem: 'div',
    cssClasses: ['slider-elem-img'],
    difficultChild: {
      nodeElem: 'img',
      attributes: {
        src: './imgs/snowman.png',
        alt: 'snowman',
      },
    },
  },
  {
    nodeElem: 'div',
    cssClasses: ['slider-elem'],
    difficultChild: {
      nodeElem: 'p',
      cssClasses: ['slider-text'],
      text: 'create',
    },
  },
  {
    nodeElem: 'div',
    cssClasses: ['slider-elem-img'],
    difficultChild: {
      nodeElem: 'img',
      attributes: {
        src: './imgs/christmas-trees.png',
        alt: 'christmas-trees',
      },
    },
  },
  {
    nodeElem: 'div',
    cssClasses: ['slider-elem'],
    difficultChild: {
      nodeElem: 'p',
      cssClasses: ['slider-text'],
      text: 'love',
    },
  },
  {
    nodeElem: 'div',
    cssClasses: ['slider-elem-img'],
    difficultChild: {
      nodeElem: 'img',
      attributes: {
        src: './imgs/christmas-tree-ball.png',
        alt: 'christmas-tree-ball',
      },
    },
  },
  {
    nodeElem: 'div',
    cssClasses: ['slider-elem'],
    difficultChild: {
      nodeElem: 'p',
      cssClasses: ['slider-text'],
      text: 'harmony',
    },
  },
  {
    nodeElem: 'div',
    cssClasses: ['slider-elem-img'],
    difficultChild: {
      nodeElem: 'img',
      attributes: {
        src: './imgs/fairytale-house.png',
        alt: 'fairytale-house',
      },
    },
  },
];

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

const TOTAL_SLIDER_WIDTH = 2146;

let currentOffset = 0;

function moveSlider(direction) {
  let visibleSliderWidth = sliderContainer.offsetWidth;
  let offset = calculateOffset(visibleSliderWidth);
  let directionValue =
    direction === 'left' ? +offset.toFixed(0) : -offset.toFixed(0);

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
  let offset = Math.floor(
    (TOTAL_SLIDER_WIDTH - visibleSliderWidth) / numberOfClicks,
  );
  return Math.max(offset, 1);
}

function updateButtonState() {
  leftBtn.classList.toggle('inactiveNav', currentOffset === 0);
  rightBtn.classList.toggle(
    'inactiveNav',
    currentOffset <= -(TOTAL_SLIDER_WIDTH - sliderContainer.offsetWidth),
  );
}

function initSlider() {
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

window.addEventListener('load', () => {
  initBurger();
  initGiftsGetData();
  initTimer(timerData);
  initSlider();
});
//# sourceMappingURL=main-CvMOanpA.js.map
