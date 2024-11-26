import sortAndRenderData from './giftsSorting';

export default function initGiftsGetData() {
  sortAndRenderData('All');
}

class Card {
  constructor(cardProps) {
    const { category, name, img, description, className } = cardProps;
    this.name = name;
    this.category = category;
    this.img = img;
    this.description = description;
    this.className = className;
    this.elem = this.createCardElems();
  }
  createCardElems() {
    let cardClass = this.category.toLowerCase().replace(' ', '-');
    console.log(cardClass);

    const card = this.createElem({ nodeElem: 'div', cssClasses: ['card'] });
    const cardImg = this.createElem({
      nodeElem: 'img',
      cssClasses: [`cards-img-${cardClass}`],
    });

    const cardText = this.createElem({
      nodeElem: 'div',
      cssClasses: ['card-text-container'],
    });
    const cardH3 = this.createElem({
      nodeElem: 'h3',
      cssClasses: ['header4', this.className],
      text: this.category,
    });
    const cardH4 = this.createElem({
      nodeElem: 'h4',
      cssClasses: ['header3'],
      text: this.name,
    });

    card.append(cardImg, cardText);
    cardText.append(cardH3, cardH4);
    return card;
  }
  createElem(props) {
    const { nodeElem, cssClasses = [], attributes = {}, text } = props;
    const elem = document.createElement(nodeElem);
    elem.classList.add(...cssClasses);

    Object.entries(attributes).forEach(([key, value]) => {
      elem.setAttribute(key, value);
    });

    if (text) {
      elem.textContent = text;
    }
    return elem;
  }
  render(parent) {
    parent.append(this.elem);
  }
}

function renderCards(filteredData) {
  const cardsContainer = document.querySelector('.cards-container');
  console.log('я рендер');

  filteredData.forEach((gift) => {
    const { category, name, img, description, className } = gift;
    const card = new Card({
      category,
      name,
      img,
      description,
      className,
    });
    card.render(cardsContainer);
  });
}

function checkPage(gifts) {
  console.log('я проверка');

  if (window.location.href.includes('gifts')) {
    return gifts.slice(0, 12); // убрать слайс перед 3 частью
  }
  // раскомментировать на третьей части
  // shuffleGifts(gifts);
  return gifts.slice(0, 4);
}

// раскомментировать на третьей части
// function shuffleGifts(gifts) {
//   for (let i = gifts.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [gifts[i], gifts[j]] = [gifts[j], gifts[i]];
//   }
// }

function clearContainer(container) {
  container.innerHTML = '';
  console.log('я очистка');
}

export { Card, clearContainer, renderCards, checkPage };
