const url = './assets/data/gifts.json';
let gifts = [];
let lastGiftItem;

fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error('error' + response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    gifts = data;
    shuffleGifts(gifts);
    renderCards(gifts);
  })
  .catch((error) => console.error(error));
class Card {
  constructor(category, name, img, description, className, superpower) {
    this.name = name;
    this.category = category;
    this.img = img;
    this.description = description;
    this.className = className;
    this.superpower = superpower; //переделать, возвращает undefined((
    this.elem = this.createCardElem();
  }
  createCardElem() {
    const card = document.createElement('div');
    const cardImg = document.createElement('img');
    const cardText = document.createElement('div');
    const cardH3 = document.createElement('h3');
    const cardH4 = document.createElement('h4');

    card.classList.add('card');
    cardImg.classList.add('cards-img-for-work');
    cardText.classList.add('card-text-container');
    cardH3.classList.add('header4', `${this.className}`);

    cardImg.src = this.img;
    cardImg.alt = this.name;
    cardH3.textContent = this.category;
    cardH4.textContent = this.name;

    card.appendChild(cardImg);
    card.appendChild(cardText);
    cardText.appendChild(cardH3);
    cardText.appendChild(cardH4);
    return card;
  }
  render(parent) {
    parent.appendChild(this.elem);
  }
}
function renderCards(gifts) {
  const cardsContainer = document.querySelector('.cards-container');
  cardsContainer.innerHTML = '';

  let returnGifts = checkPage();
  returnGifts.forEach((gift) => {
    const { category, name, img, description, className, superpower } = gift;
    const card = new Card(
      category,
      name,
      img,
      description,
      className,
      superpower,
    );
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
