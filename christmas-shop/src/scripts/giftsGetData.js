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
      superpowers = {},
    } = cardProps;
    this.name = name;
    this.category = category;
    this.description = description;
    this.className = className;
    this.superpowers = superpowers;
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
    const overlay = this.createElem({
      nodeElem: 'div',
      cssClasses: ['overlay'],
    });
    const cssClass = this.category.toLowerCase().replace(' ', '-');

    console.log('я попап');
    const popupContainer = this.createElem({
      nodeElem: 'div',
      cssClasses: ['popup-container'],
    });

    const popupImg = this.createElem({
      nodeElem: 'div',
      cssClasses: [`popup-img-${cssClass}`],
    });
    const popupTextContainer = this.createElem({
      nodeElem: 'div',
      cssClasses: ['popup-text-container'],
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
    });

    const popupSuperpowerList = this.createPopupSuperpowerList(
      this.superpowers,
    );

    closeBtn.addEventListener('click', () => {
      popupContainer.remove();
      overlay.style.visibility = 'hidden';
      overlay.remove();
    });
    overlay.addEventListener('click', () => {
      popupContainer.remove();
      overlay.style.visibility = 'hidden';
      overlay.remove();
    });

    popupTextContainer.append(
      popupH3,
      popupH4,
      popupDecsription,
      popupListHeader,
      popupSuperpowerList,
    );
    popupContainer.append(popupImg, popupTextContainer, closeBtn);
    overlay.append(popupContainer);
    overlay.style.visibility = 'visible';
    return overlay;
  }

  createPopupSuperpowerList() {
    const ul = this.createElem({
      nodeElem: 'ul',
      cssClasses: ['popup-ul'],
      text: '',
    });
    Object.entries(this.superpowers).forEach(([key, value]) => {
      const li = this.createElem({
        nodeElem: 'li',
        cssClasses: ['popup-li'],
        text: `${key.toUpperCase()} ${value}`,
      });

      for (let i = 1; i <= value[1]; i += 1) {
        const superpowerLogo = this.createElem({
          nodeElem: 'img',
          attributes: { alt: '', src: '/imgs/superpowerLogo.svg' },
          cssClasses: ['superpowerLogo'],
        });
        li.append(superpowerLogo);
      }
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
    const { category, name, description, className, superpowers = {} } = gift;
    const card = new Card({
      category,
      name,
      description,
      className,
      superpowers,
    });
    card.render(cardsContainer);
  });
}

export { Card, renderCards };
