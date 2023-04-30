export const createElement = (tagName, styles = []) => {
  const element = document.createElement(tagName);

  if (!styles.length) {
    return element;
  }

  styles.forEach((item) => element.classList.add(item));
  return element;
};

export const metaKeys = ['Backspace', 'Tab', 'CapsLock', 'Enter', 'Shift', 'Control', 'Alt', 'Meta', 'Meta', 'Alt', 'ArrowLeft', 'ArrowUp', 'ArrowDown', 'ArrowRight'];
