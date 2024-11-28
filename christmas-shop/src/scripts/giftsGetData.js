import initSorting from './giftsSorting';

export default function initGiftsGetData() {
  initSorting('All');
}

class Card {
  constructor(cardProps) {
    const {
      category,
      name,
      description,
      className,
      superpower = {},
    } = cardProps;
    this.name = name;
    this.category = category;
    this.description = description;
    this.className = className;
    this.superpower = superpower;
    this.elem = this.createCardElems();
    this.elem.addEventListener('click', () => {
      document.body.append(this.createPopup());
    });
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
    const cssClass = this.category.toLowerCase().replace(' ', '-');

    console.log('я попап');
    const popupContainer = this.createElem({
      nodeElem: 'div',
      cssClasses: ['popup-container'],
    });

    const popupImg = this.createElem({
      nodeElem: 'div',
      cssClasses: [`cards-img-${cssClass}`],
    });
    const popupTextContainer = this.createElem({
      nodeElem: 'div',
      cssClasses: ['card-text-container'],
    });
    const popupH3 = this.createElem({
      nodeElem: 'h3',
      cssClasses: ['header4', this.className],
      text: this.category,
    });
    const popupH4 = this.createElem({
      nodeElem: 'h4',
      cssClasses: ['header3'],
      text: this.name,
    });
    const popupDecsription = this.createElem({
      nodeElem: 'p',
      cssClasses: ['p'],
      text: this.description,
    });
    const popupListHeader = this.createElem({
      nodeElem: 'h4',
      cssClasses: ['header4'],
      text: 'Adds superpowers to:',
    });
    const closeBtn = this.createElem({
      nodeElem: 'button',
      cssClasses: ['popup-close-btn'],
      text: 'X',
    });

    const popupSuperpowerList = this.createPopupSuperpowerList(this.superpower);

    closeBtn.addEventListener('click', () => popupContainer.remove());
    popupContainer.append(popupImg, popupTextContainer, closeBtn);
    popupTextContainer.append(
      popupH3,
      popupH4,
      popupDecsription,
      popupListHeader,
      popupSuperpowerList,
    );
    return popupContainer;
  }
  createPopupSuperpowerList() {
    const ul = this.createElem({
      nodeElem: 'ul',
      cssClasses: ['popup-ul'],
      text: '',
    });
    Object.entries(this.superpower).forEach(([key, value]) => {
      const li = this.createElem({
        nodeElem: 'li',
        cssClasses: ['popup-li'],
        text: `${key.charAt(0).toUpperCase()} : ${value}`,
      });
      ul.append(li);
    });
    return ul;
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
    const { category, name, description, className, superpower = {} } = gift;
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
