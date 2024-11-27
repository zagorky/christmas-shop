// import { Card } from './giftsGetData';

class Popup extends Card {
  constructor(cardProps) {
    super(cardProps);
  }

  createPopupElems() {
    const cssClass = this.category.toLowerCase().replace(' ', '-');

    const popup = this.createPopupElem({
      nodeElem: 'div',
      cssClasses: ['popup-container'],
    });
    const popupImg = this.createPopupElem({
      nodeElem: 'div',
      cssClasses: [`card-img-${cssClass}`],
    });
    const popupTextContainer = this.createPopupElem({
      nodeElem: 'div',
      cssClasses: ['popup-text-container'],
    });
    const popupH3 = this.createPopupElem({
      nodeElem: 'h3',
      cssClasses: ['header4', this.className],
      text: this.category,
    });
    const popupH4 = this.createPopupElem({
      nodeElem: 'h4',
      cssClasses: ['header3'],
      text: this.name,
    });

    popup.append(popupImg, popupTextContainer);
    popupTextContainer.append(popupH3, popupH4);
    return popup;
  }

  createPopupDetailsContainer() {
    return console.log(this.superpower);
  }
  createPopupElem(props) {
    return super.createElem(props);
  }
}

// const overlay = document.querySelector('.overlay');

// function toggleOverlay(value) {
//   if (value === 'open') {
//     overlay.classList.toggle('open');
//   }
// }
new Popup();
export default function initPopup(props) {
  const popup = new Popup(props);
  document.body.append(popup.createPopupElems());
  console.log('я попап', props);
}
