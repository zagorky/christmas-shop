const menu = document.querySelector('.menu');

class MenuElem {
  constructor(category) {
    this.input = document.createElement('input');
    this.label = document.createElement('label');
    this.category = category;
    this.name = 'menu';
    this.type = 'radio';
    this.classNameTypography = 'actionSmall';
    this.classNameMain = 'menu-btn';
    this.text = category;
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
    if (this.category === 'all') {
      this.input.checked = true;
    }
    menu?.append(this.input);
  }
  renderLabel() {
    this.label.htmlFor = this.category;
    this.label.classList.add(this.classNameTypography, this.classNameMain);
    this.label.textContent = this.category.split(/(?=[A-Z])/).join(' ');
    if (this.input.checked) {
      this.label.classList.add('activeBtn');
    }
    menu?.append(this.label);
  }
  addInputEventListener() {
    this.input.addEventListener('change', () => {
      console.log('и как их связать с сортировкой');
    });
  }
}

export default function initGiftMenu() {
  new MenuElem('all');
  new MenuElem('forWork');
  new MenuElem('forHealth');
  new MenuElem('forHarmony');
}
