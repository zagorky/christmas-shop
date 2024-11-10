const cards = document.querySelectorAll(".card");
const cardsContainer = document.querySelector(".cards-container");
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
  })
  .catch((error) => console.error(error));

class Card {
  constructor(category, name, img, description, superpower) {
    this.name = name;
    this.category = category;
    this.img = img;
    this.description = description;
    this.superpower = superpower;
    this.elem = this.createCardElem();
  }

  createCardElem() {
    const card = document.createElement("div").classList.add("card");
    card.innerHTML = `<div class="cards-img-for-work"><img src='${this.img}' alt='${this.name}' ></div>
            <div class="card-text-container">
              <h4 class="header4 for-work">${this.category}</h4>
              <h3>${this.name}</h3>
            </div>`;
    this.onClick();
  }

  onClick() {
    this.elem.addEventListener("click", this.showPopup());
  }

  showPopup() {
    console.log(this.event.target);
  }

  render(parent = document.body.cardsContainer) {
    parent.appemdChild(this.elem);
  }
}
