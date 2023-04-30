import { createElement } from './scripts/common.js';
import createTextArea from './scripts/components/textarea.js';
import createKeyboard from './scripts/components/keyboard.js';
import mouseHandler from './scripts/mouseHandler.js';
import keyHandler from './scripts/keyHandler.js';

const state = {
  value: 'hello\nhello',
  lang: 'en',
  capsLock: false,
  shift: false,
  position: 0,
};

const render = (state) => {
  const { body } = document;
  body.innerHTML = '';
  const main = createElement('main', ['main-wrap']);
  const textArea = createTextArea(state);
  const keyboard = createKeyboard(state);
  const textAreaInput = textArea.querySelector('.text-area__input');

  keyHandler(state, textAreaInput, render);
  mouseHandler(keyboard, textAreaInput, state, render);

  main.append(textArea, keyboard);
  body.append(main);
  textAreaInput.focus();
};

render(state);
