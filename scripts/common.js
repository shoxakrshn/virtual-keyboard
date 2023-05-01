import { shiftMerged, merged } from './language.js';

export const createElement = (tagName, styles = []) => {
  const element = document.createElement(tagName);

  if (!styles.length) {
    return element;
  }

  styles.forEach((item) => element.classList.add(item));
  return element;
};

export const metaKeys = ['Backspace', 'Tab', 'CapsLock', 'Enter', 'Shift', 'Control', 'Alt', 'Meta', 'Meta', 'Alt', 'ArrowLeft', 'ArrowRight'];

export const capsLock = (state) => {
  const keys = document.querySelectorAll('.key');

  keys.forEach((key) => {
    if (!key.classList.contains('key_service')) {
      const { textContent } = key;
      const upperCase = state.capsLock ? textContent.toUpperCase() : textContent.toLowerCase();
      key.textContent = upperCase;
    }
  });
/*
  for (let i = 0; i < keys.length; i += 1) {
    if (keys[i].classList.contains('key_service')) {
      continue;
    }
    const { textContent } = keys[i];
    const upperCase = state.capsLock ? textContent.toUpperCase() : textContent.toLowerCase();
    keys[i].textContent = upperCase;
  }
  */
};

export const changeLanguage = (state) => {
  const keys = document.querySelectorAll('.key');
  keys.forEach((key, index) => {
    if (!key.classList.contains('key_service') && !key.classList.contains('key_arrow')) {
      console.log(state);
      key.textContent = state.shift ? shiftMerged[state.lang][index] : merged[state.lang][index];
    }
  });
};
