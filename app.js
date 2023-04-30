import { createElement, metaKeys } from './scripts/common.js';
import createTextArea from './scripts/components/textarea.js';
import createKeyboard from './scripts/components/keyboard.js';
import mouseHandler from './scripts/mouseHandler.js';
import hintSubtitile from './scripts/components/hint.js';

const state = {
  value: '',
  lang: 'en',
  capsLock: false,
  shift: false,
  position: 0,
  pressed: false,
};

const render = () => {
  const { body } = document;
  body.innerHTML = '';
  const main = createElement('main', ['main-wrap']);
  const textArea = createTextArea(state);
  const keyboard = createKeyboard(state);
  const textAreaInput = textArea.querySelector('.text-area__input');

  mouseHandler(keyboard, textAreaInput, state, render);

  main.append(textArea, keyboard, hintSubtitile);
  body.append(main);
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
      setTimeout(() => render(), 100);
      break;

    case 'Shift':
      state.shift = !state.shift;
      state.lang = `${state.lang.slice(0, 2)}Shift`;
      console.log('down', state);
      render();
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
    render(state);
    state.pressed = false;
  }
};

const handleKeyUp = (e) => {
  document.querySelectorAll('.key').forEach((key) => key.classList.remove('pressed'));

  switch (e.key) {
    case 'CapsLock':
      state.capsLock = false;
      render(state);
      break;

    case 'Shift':
      state.shift = !state.shift;
      state.lang = state.lang.slice(0, 2);
      console.log('up', state);
      render(state);
      break;

    default: break;
  }
};

document.addEventListener('keydown', handleKeyDown);
document.addEventListener('keyup', handleKeyUp);

render();

/*
document.addEventListener('keydown', (e) => {
  if (e.key === 'CapsLock') {
    const newCapsLockState = e.getModifierState('CapsLock');
    if (state.capsLock !== newCapsLockState) {
      state.capsLock = newCapsLockState;
      console.log(state);
      render(state);
    }
  }
  console.log(e.key);
  console.log(e.getModifierState('CapsLock'));
});

document.addEventListener('keyup', (e) => {
  if (e.key === 'CapsLock') {
    const newCapsLockState = e.getModifierState('CapsLock');
    if (state.capsLock !== newCapsLockState) {
      state.capsLock = newCapsLockState;
      render(state);
    }
  }
});

*/
