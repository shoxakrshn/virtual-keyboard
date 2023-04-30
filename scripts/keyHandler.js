import { metaKeys } from './common.js';

export default (state, input, render) => {
  document.addEventListener('keydown', (e) => {
    e.preventDefault();

    const key = document.querySelector(`[data-key=${e.code}]`);
    key.classList.add('pressed');

    if (!metaKeys.includes(e.key)) {
      state.value += key.textContent;
      input.value = state.value;
    }

    switch (e.key) {
      case 'Backspace':
        state.value = state.value.slice(0, -1);
        input.value = state.value;
        break;

      case 'Enter':
        state.value += '\n';
        input.value = state.value;
        input.focus();
        break;

      case 'Tab':
        state.value += '    ';
        input.value = state.value;
        input.focus();
        break;

      default: break;
    }
  });

  document.addEventListener('keyup', (e) => {
    document.querySelectorAll('.key').forEach((key) => key.classList.remove('pressed'));
  });
};
