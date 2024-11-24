import giftsData from '../data/gifts.json';
let gifts = [];

export default function initGiftsGetData() {
  gifts = giftsData;
  clearContainer(document.querySelector('.cards-container'));
  shuffleGifts(giftsData);
  renderCards(gifts);
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
    const card = this.createElem({ nodeElem: 'div', cssClasses: ['card'] });
    const cardImg = this.createElem({
      nodeElem: 'img',
      cssClasses: ['cards-img-for-work'],
      attributes: { src: this.img, alt: this.name },
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
    parent.appendChild(this.elem);
  }
}

function renderCards() {
  const cardsContainer = document.querySelector('.cards-container');
  cardsContainer.innerHTML = '';

  let returnGifts = checkPage();
  returnGifts.forEach((gift) => {
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

function checkPage() {
  if (window.location.href.includes('gifts')) {
    return gifts;
  }
  return gifts.slice(0, 4);
}

function shuffleGifts(gifts) {
  for (let i = gifts.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [gifts[i], gifts[j]] = [gifts[j], gifts[i]];
  }
}

function clearContainer(elem) {
  elem.innerHTML = '';
}

export { Card };
