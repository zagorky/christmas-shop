import createElem from './helper';

export default function createPopup({
  children = [],
  onClose,
  onBackgroundClick,
}) {
  const dialog = createElem({
    nodeElem: 'dialog',
    cssClasses: ['popup-dialog'],
  });

  const popupContainer = createElem({
    nodeElem: 'div',
    cssClasses: ['popup-container'],
  });

  const closeBtn = this.createElem({
    nodeElem: 'button',
    cssClasses: ['popup-close-btn'],
  });

  closeBtn.addEventListener('click', () => {
    dialog.close();
    if (onBackgroundClick) {
      onBackgroundClick();
    }
    dialog.remove();
  });
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) {
      dialog.close();
      if (onClose) {
        onClose();
      }
      dialog.remove();
    }
  });

  popupContainer.append(...children, closeBtn);
  dialog.append(popupContainer);

  return dialog;
}
