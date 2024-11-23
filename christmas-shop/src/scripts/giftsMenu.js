const menu = document.querySelector('.menu');

class MenuElem {
  constructor(category, ability) {
    this.input = document.createElement('input');
    this.label = document.createElement('label');
    this.category = category;
    this.name = 'menu';
    this.type = 'radio';
    this.classNameTypography = 'actionSmall';
    this.classNameMain = 'menu-btn';
    this.text = category;
    this.ability = ability;
    this.renderMenuElem();
  }
  renderMenuElem() {
    this.renderInput();
    this.renderLabel();
    this.checkAbility();
  }
  renderInput() {
    this.input.type = this.type;
    this.input.name = this.name;
    this.input.id = this.category;
    menu.appendChild(this.input);
  }
  renderLabel() {
    this.label.htmlFor = this.category;
    this.label.classList.add(this.classNameTypography, this.classNameMain);
    this.label.textContent = this.category.split(/(?=[A-Z])/).join(' ');
    menu.appendChild(this.label);
  }
  checkAbility() {
    if (this.ability) {
      this.label.classList.toggle('activeBtn');
    }
    this.input.disabled = true;
  }
  static clearMenu(parent) {
    parent.innerHTML = '';
  }
}

export default function initGiftsMenu() {
  new MenuElem('all', true);
  new MenuElem('forWork', false);
  new MenuElem('forHealth', false);
  new MenuElem('forHarmony', false);
}