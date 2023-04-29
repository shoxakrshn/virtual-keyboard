import createElement from '../common.js';
import * as lang from '../language.js';
import createKey from './key.js';

const createComponent = () => {
  const keyboardBlock = createElement('div', ['keyboard']);
  const keyboardLayout = createElement('div', ['keyboard__layout']);

  const firstRow = createElement('div', ['keyboard__row']);
  const secondRow = createElement('div', ['keyboard__row']);
  const thirdRow = createElement('div', ['keyboard__row']);
  const fourthdRow = createElement('div', ['keyboard__row']);
  const metaRow = createElement('div', ['keyboard__row']);
  createKey(firstRow, lang.en.digitRow);
  createKey(secondRow, lang.en.letterRowFirst);
  createKey(thirdRow, lang.en.letterRowMiddle);
  createKey(fourthdRow, lang.en.letterRowLast);
  createKey(metaRow, lang.meta);

  keyboardLayout.append(firstRow, secondRow, thirdRow, fourthdRow, metaRow);
  keyboardBlock.append(keyboardLayout);

  return keyboardBlock;
};

export default createComponent;
