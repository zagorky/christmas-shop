const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.left');
const nextBtn = document.querySelector('.right');

const sliderWidth = slider.scrollWidth;
let sliderVisibleWidth;
let offset = 0;
let currentOffset = 0;
let click = 3;

function setSliderVisibleWidth() {
  return (sliderVisibleWidth = slider.clientWidth);
}
function calculateSliderReplacing() {
  sliderVisibleWidth = setSliderVisibleWidth();
  return (offset = (sliderWidth - sliderVisibleWidth) / changeNumbersOfClick());
}
function changeNumbersOfClick() {
  return window.innerWidth >= 768 ? (click = 3) : (click = 6);
}
function moveSlider(offset) {
  slider.style.transform = `translateX(-${offset}px)`;
}
function switchOffBnt() {
  const maxOffset = sliderWidth - sliderVisibleWidth;

  if (currentOffset <= 0) {
    switchClassName(prevBtn, 'inactiveNav', 'activeNav');
  } else {
    switchClassName(prevBtn, 'activeNav', 'inactiveNav');
  }

  if (currentOffset >= maxOffset) {
    switchClassName(nextBtn, 'inactiveNav', 'activeNav');
  } else {
    switchClassName(nextBtn, 'activeNav', 'inactiveNav');
  }
}

function switchClassName(elem, addClass, removeClass) {
  elem.classList.add(addClass);
  elem.classList.remove(removeClass);
}

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

function initSlider() {
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
}

export { initSlider };
