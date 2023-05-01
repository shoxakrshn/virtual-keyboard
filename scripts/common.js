import { shiftMerged, merged } from "./language.js";
export const createElement = (tagName, styles = []) => {
  const element = document.createElement(tagName);

  if (!styles.length) {
    return element;
  }

  styles.forEach((item) => element.classList.add(item));
  return element;
};

export const metaKeys = ['Backspace', 'Tab', 'CapsLock', 'Enter', 'Shift', 'Control', 'Alt', 'Meta', 'Meta', 'Alt', 'ArrowLeft', 'ArrowRight'];

const changeLanguage = (keyboard, state) => {
  const keys = document.querySelectorAll('.key');
};

export const capsLock = (state) => {
  const keys = document.querySelectorAll('.key');

  for (let i = 0; i < keys.length; i += 1) {
    if (keys[i].classList.contains('key_service')) {
      continue;
    }
    const { textContent } = keys[i];
    console.log(state.capsLock);
    const upperCase = state.capsLock ? textContent.toUpperCase() : textContent.toLowerCase();
    keys[i].textContent = upperCase;
  }
};

export const shift = (state) => {
  const keys = document.querySelectorAll('.key');
  keys.forEach((key, index) => {
    if (!key.classList.contains('key_service') && !key.classList.contains('key_arrow')) {
      console.log(state);
      key.textContent = state.shift ? shiftMerged[state.lang][index] : merged[state.lang][index];
    }
  });
};
