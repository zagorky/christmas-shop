import sortAndRenderData from './giftsSorting';

const menu = document.querySelector('.menu');

class MenuElem {
  constructor(category, onChange) {
    this.input = document.createElement('input');
    this.label = document.createElement('label');

    this.category = category;

    this.name = 'menu';
    this.type = 'radio';
    this.classNameTypography = 'actionSmall';
    this.classNameMain = 'menu-btn';
    this.text = category;
    this.input.onchange = () => {
      onChange(this.category.replace(/-/g, ' '));
      menu.querySelectorAll('.menu-btn').forEach((label) => {
        label.classList.remove('activeBtn');
      });
      this.label.classList.add('activeBtn');
    };

    this.renderMenuElem();
  }
  renderMenuElem() {
    this.renderInput();
    this.renderLabel();
  }
  renderInput() {
    this.input.type = this.type;
    this.input.name = this.name;
    this.input.id = this.category;
    if (this.category === 'All') {
      this.input.checked = true;
    }
    menu?.append(this.input);
  }
  renderLabel() {
    this.label.htmlFor = this.category;
    this.label.classList.add(this.classNameTypography, this.classNameMain);
    this.label.textContent = this.category.replace(/-/g, ' ');
    if (this.input.checked) {
      this.label.classList.add('activeBtn');
    }
    menu?.append(this.label);
  }
}

export default function initGiftMenu() {
  new MenuElem('All', sortAndRenderData);
  new MenuElem('For-Work', sortAndRenderData);
  new MenuElem('For-Health', sortAndRenderData);
  new MenuElem('For-Harmony', sortAndRenderData);
}
