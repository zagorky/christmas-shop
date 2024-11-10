// in index there are category, name  from json, imgs from another place
// in gifts there are category, name  from json imgs from another place
// in pop-up there are category, name, description, superpowers: live, create, love, dream

const url = "./assets/data/gifts.json";
let gifts = [];

fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error("error" + response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    gifts = data;
    renderCards(gifts);
  })
  .catch((error) => console.error(error));
class Card {
  constructor(category, name, img, description, superpower) {
    this.name = name;
    this.category = category;
    this.img = img;
    this.description = description;
    this.superpower = superpower; //переделать, возвращает undefined((
    this.elem = this.createCardElem();
  }
  createCardElem() {
    const card = document.createElement("div");
    const cardImg = document.createElement("img");
    const cardText = document.createElement("div");
    const cardH4 = document.createElement("h4");
    const cardH3 = document.createElement("h3");

    card.classList.add("card");
    cardImg.classList.add("cards-img-for-work");
    cardText.classList.add("card-text-container");
    cardH4.classList.add("header4", "for-work");

    cardImg.src = this.img;
    cardImg.alt = this.name;
    cardH4.textContent = this.category;
    cardH3.textContent = this.name;

    card.appendChild(cardImg);
    card.appendChild(cardText);
    cardText.appendChild(cardH4);
    cardText.appendChild(cardH3);
    return card;
  }
  render(parent) {
    parent.appendChild(this.elem);
  }
}
function renderCards(gifts) {
  const cardsContainer = document.querySelector(".cards-container");
  cardsContainer.innerHTML = "";
  gifts.forEach((gift) => {
    const { category, name, img, description, superpower } = gift;
    const card = new Card(category, name, img, description, superpower);
    card.render(cardsContainer);
  });
}
