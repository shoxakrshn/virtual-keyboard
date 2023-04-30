import { createElement } from '../common.js';
import * as language from '../language.js';
import createKey from './key.js';

const createComponent = (state) => {
  const { lang } = state;

  const keyboardBlock = createElement('div', ['keyboard']);
  const keyboardLayout = createElement('div', ['keyboard__layout']);

  const firstRow = createElement('div', ['keyboard__row']);
  const secondRow = createElement('div', ['keyboard__row']);
  const thirdRow = createElement('div', ['keyboard__row']);
  const fourthdRow = createElement('div', ['keyboard__row']);
  const metaRow = createElement('div', ['keyboard__row']);

  createKey(firstRow, language[lang].digitRow);
  createKey(secondRow, language[lang].letterRowFirst);
  createKey(thirdRow, language[lang].letterRowMiddle);
  createKey(fourthdRow, language[lang].letterRowLast);
  createKey(metaRow, language.meta);

  keyboardLayout.append(firstRow, secondRow, thirdRow, fourthdRow, metaRow);
  keyboardBlock.append(keyboardLayout);

  return keyboardBlock;
};

export default createComponent;
