const cards = document.querySelectorAll(".card");
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
    console.log(gifts);
  });

class Card {
  constructor(category, name, img) {
    this.name = name;
    this.category = category;
    this.img = img;
  }
}
