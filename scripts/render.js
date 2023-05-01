import createElement from './createElement.js';
import createTextArea from './components/textarea.js';
import createKeyboard from './components/keyboard.js';
import mouseHandler from './mouseHandler.js';
import hintSubtitile from './components/hint.js';
import keyHandler from './keyHandler.js';

const render = (state) => {
  const main = createElement('main', ['main-wrap']);
  const textArea = createTextArea(state);
  const keyboard = createKeyboard(state);
  const textAreaInput = textArea.querySelector('.text-area__input');

  mouseHandler(keyboard, textAreaInput, state);
  keyHandler(state);

  main.append(textArea, keyboard, hintSubtitile);
  document.body.append(main);
  textAreaInput.focus();
};

export default render;
