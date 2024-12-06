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

  const closeBtn = createElem({
    nodeElem: 'button',
    cssClasses: ['popup-close-btn'],
  });

  closeBtn.addEventListener('click', () => {
    dialog.close();
    onClose?.();
    dialog.remove();
  });
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) {
      dialog.close();
      onBackgroundClick?.();
      dialog.remove();
    }
  });

  popupContainer.append(...children, closeBtn);
  dialog.append(popupContainer);

  return dialog;
}
