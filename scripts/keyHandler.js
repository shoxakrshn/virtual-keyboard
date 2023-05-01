import { metaKeys } from './language.js';
import capsLock from './capsLock.js';
import changeLanguage from './changeLanguageShift.js';

export default (state) => {
  document.addEventListener('keydown', (e) => {
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
        capsLock(state);
        break;

      case 'Shift':
        state.shift = true;
        changeLanguage(state);
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
      changeLanguage(state);
      state.pressed = false;
    }
  });

  document.addEventListener('keyup', (e) => {
    document.querySelectorAll('.key').forEach((key) => key.classList.remove('pressed'));

    switch (e.key) {
      case 'CapsLock':
        state.capsLock = false;
        capsLock(state);
        break;

      case 'Shift':
        state.shift = false;
        changeLanguage(state);
        break;

      default: break;
    }
  });
};
