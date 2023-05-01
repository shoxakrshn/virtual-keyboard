import { createElement, metaKeys } from './scripts/common.js';
import createTextArea from './scripts/components/textarea.js';
import createKeyboard from './scripts/components/keyboard.js';
import mouseHandler from './scripts/mouseHandler.js';
import hintSubtitile from './scripts/components/hint.js';
import { capsLock, shift } from './scripts/common.js';

const state = {
  value: '',
  lang: localStorage.getItem('lang') || 'en',
  capsLock: false,
  shift: false,
  position: 0,
  pressed: false,
};

const main = createElement('main', ['main-wrap']);
document.body.append(main);

const render = () => {
  //  const { body } = document;
  //  body.innerHTML = '';
  const mainBlock = document.querySelector('.main-wrap');
  mainBlock.innerHTML = '';
  //  const main = createElement('main', ['main-wrap']);
  const textArea = createTextArea(state);
  const keyboard = createKeyboard(state);
  const textAreaInput = textArea.querySelector('.text-area__input');

  mouseHandler(keyboard, textAreaInput, state, render);

  mainBlock.append(textArea, keyboard, hintSubtitile);
  //  body.append(main);
  textAreaInput.focus();
};

const handleKeyDown = (e) => {
  e.preventDefault();
  const textAreaInput = document.querySelector('.text-area__input');
  const key = document.querySelector(`[data-key=${e.code}]`);
  key.classList.add('pressed');

  if (!metaKeys.includes(e.key)) {
    state.value += key.textContent;
    textAreaInput.value = state.value;
    state.position = state.value.length;
  }

  switch (e.key) {
    case 'Backspace':
      state.value = state.value.slice(0, -1);
      textAreaInput.value = state.value;
      break;

    case 'Enter':
      state.value += '\n';
      textAreaInput.value = state.value;
      textAreaInput.focus();
      break;

    case 'Tab':
      state.value += '    ';
      textAreaInput.value = state.value;
      textAreaInput.focus();
      break;

    case 'CapsLock':
      state.capsLock = true;
      //setTimeout(() => render(), 100);
      capsLock(state);
      break;

    case 'Shift':
      state.shift = true;
      //state.lang = `${state.lang.slice(0, 2)}Shift`;
      //console.log('down', state);
      //render();
      shift(state);
      break;

    case 'ArrowLeft':
      textAreaInput.focus();
      if (state.position !== 0) {
        state.position -= 1;
        textAreaInput.selectionStart = state.position;
        textAreaInput.selectionEnd = state.position;
      }
      break;

    case 'ArrowRight':
      textAreaInput.focus();
      if (state.position !== state.value.length) {
        state.position += 1;
        textAreaInput.selectionStart = state.position;
        textAreaInput.selectionEnd = state.position;
      }
      break;
    /*
    case 'Meta':
      state.lang = state.lang === 'en' ? 'ru' : 'en';
      localStorage.setItem('lang', state.lang);
      render(state);
      break;
    */
    default:
      break;
  }

  if (e.key === 'Alt') {
    state.pressed = true;
  }

  if (e.key === 'Control' && state.pressed) {
    state.lang = state.lang === 'en' ? 'ru' : 'en';
    localStorage.setItem('lang', state.lang);
    render();
    state.pressed = false;
  }
};

const handleKeyUp = (e) => {
  document.querySelectorAll('.key').forEach((key) => key.classList.remove('pressed'));

  switch (e.key) {
    case 'CapsLock':
      state.capsLock = false;
      //setTimeout(() => render(), 100);
      capsLock(state);
      break;

    case 'Shift':
      state.shift = false;
      //state.lang = state.lang.slice(0, 2);
      //console.log('up', state);
      //render(main);
      shift(state);
      break;

    default: break;
  }
};

document.addEventListener('keydown', handleKeyDown);
document.addEventListener('keyup', handleKeyUp);

render();
