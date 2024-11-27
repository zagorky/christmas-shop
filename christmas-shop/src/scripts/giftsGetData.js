import initSorting from './giftsSorting';
// import initPopup from './popup';

export default function initGiftsGetData() {
  initSorting('All');
}

class Card {
  constructor(cardProps) {
    const { category, name, description, className, superpower } = cardProps;
    this.name = name;
    this.category = category;
    this.description = description;
    this.className = className;
    this.superpower = superpower;
    this.elem = this.createCardElems();
    this.elem.addEventListener('click', this.createPopup());
  }
  createCardElems() {
    const cssClass = this.category.toLowerCase().replace(' ', '-');

    const card = this.createElem({
      nodeElem: 'div',
      cssClasses: ['card'],
    });
    const cardImg = this.createElem({
      nodeElem: 'div',
      cssClasses: [`cards-img-${cssClass}`],
    });
    const cardTextContainer = this.createElem({
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

    card.append(cardImg, cardTextContainer);
    cardTextContainer.append(cardH3, cardH4);
    return card;
  }
  createPopup() {
    console.log('я попап');
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
    const { category, name, description, className, superpower } = gift;
    const card = new Card({
      category,
      name,
      description,
      className,
      superpower,
    });
    card.render(cardsContainer);
  });
}

export { Card, renderCards };
