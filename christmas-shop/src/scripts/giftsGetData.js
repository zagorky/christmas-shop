import giftsData from '../data/gifts.json';
let gifts = [];

// https://gist.github.com/TELEUZI/0fadffb59a84c07bfdf97e0353d3281c#%D0%BB%D0%B8%D0%BA%D0%B2%D0%B8%D0%B4%D0%B8%D1%80%D1%83%D0%B5%D0%BC-%D0%BC%D0%B0%D1%80%D1%82%D1%8B%D1%88%D0%BA%D0%B8%D0%BD-%D1%82%D1%80%D1%83%D0%B4-
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
    if (Object.keys(attributes).length > 0) {
      const attr = Object.entries(attributes);
      attr.forEach(([key, value]) => {
        elem.setAttribute(key, value);
      });
    }
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
