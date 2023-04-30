import { createElement, metaKeys } from './scripts/common.js';
import createTextArea from './scripts/components/textarea.js';
import createKeyboard from './scripts/components/keyboard.js';

const state = {
  value: 'hello\nhello',
  lang: 'en',
  capsLock: false,
  shift: false,
};

const render = (state) => {
  const { body } = document;
  body.innerHTML = '';
  const main = createElement('main', ['main-wrap']);
  const textArea = createTextArea(state);
  const keyboard = createKeyboard(state);
  main.append(textArea, keyboard);
  body.append(main);
  const textAreaInput = textArea.querySelector('.text-area__input');

  document.addEventListener('keydown', (e) => {
    e.preventDefault();
    const el = document.querySelector(`[data-key=${e.code}]`);
    el.classList.add('pressed');

    if (!metaKeys.includes(e.key)) {
      state.value += el.textContent;
      textAreaInput.value = state.value;
    }

    if (e.key === 'Backspace') {
      const { value } = state;
      state.value = value.slice(0, -1);
      textAreaInput.value = state.value;
    }
  });

  document.addEventListener('keyup', () => {
    document.querySelectorAll('.key').forEach((key) => key.classList.remove('pressed'));
  });

  const keys = keyboard.querySelectorAll('.key');
  keys.forEach((key) => {
    key.addEventListener('click', (e) => {
      if (!key.classList.contains('key_service') && !key.classList.contains('key_arrow')) {
        state.value += e.target.textContent;
        textAreaInput.value = state.value;
      }
    });
  });

  const deleteBtn = keyboard.querySelector('.key_delete');
  const enterBtn = keyboard.querySelector('.key_return');
  const tabBtn = keyboard.querySelector('.key_tab');
  const leftBtn = keyboard.querySelector('.key_arrow-left');
  const rightBtn = keyboard.querySelector('.key_arrow-right');
  const upBtn = keyboard.querySelector('.key_arrow-up');
  const downBtn = keyboard.querySelector('.key_arrow-down');
  const capsBtn = keyboard.querySelector('.key_caps-lock');
  const fnBtn = keyboard.querySelector('.key_fn');
  const shiftBtn = keyboard.querySelectorAll('.key_shift');

  deleteBtn.addEventListener('click', () => {
    const { value } = state;
    console.log(value);
    state.value = value.slice(0, -1);
    textAreaInput.value = state.value;
  });

  enterBtn.addEventListener('click', () => {
    state.value += '\n';
    textAreaInput.value = state.value;
  });

  tabBtn.addEventListener('click', () => {
    state.value += '    ';
    textAreaInput.value = state.value;
  });

  let accClick = state.value.length;
  leftBtn.addEventListener('click', () => {
    textAreaInput.focus();
    if (accClick !== 0) {
      accClick -= 1;
      textAreaInput.selectionStart = accClick;
      textAreaInput.selectionEnd = accClick;
    }
  });

  rightBtn.addEventListener('click', () => {
    const { value } = state;
    textAreaInput.focus();

    if (accClick !== value.length) {
      accClick += 1;
      textAreaInput.selectionStart = accClick;
      textAreaInput.selectionEnd = accClick;
    }
  });

  capsBtn.addEventListener('click', () => {
    state.capsLock = !state.capsLock;
    render(state);
  });

  fnBtn.addEventListener('click', () => {
    const { lang } = state;
    state.lang = lang === 'en' ? 'ru' : 'en';
    render(state);
  });

  shiftBtn.forEach((shift) => {
    shift.addEventListener('mousedown', () => {
      state.shift = !state.shift;
      state.lang = `${state.lang.slice(0, 2)}Shift`;
      console.log('down', state);
      render(state);
    });

    shift.addEventListener('mouseup', () => {
      state.shift = !state.shift;
      state.lang = state.lang.slice(0, 2);
      console.log('up', state);
      render(state);
    });
  });
};

/*
upBtn.addEventListener('click', () => {
  textAreaInput.focus();
  let previousLineStart = state.value.lastIndexOf('\n');

  if (previousLineStart === -1) {
    previousLineStart = 0;
  } else {
    previousLineStart = accClick - previousLineStart - 1; // Игнорировать символ новой строки
  }
  accClick = previousLineStart;
  console.log('new position:', previousLineStart);
  textAreaInput.selectionStart = accClick;
  textAreaInput.selectionEnd = accClick;
});

downBtn.addEventListener('click', () => {
  textAreaInput.focus();
  let nextLineEnd = state.value.indexOf('\n', accClick);
  console.log('next:', nextLineEnd);

  if (nextLineEnd === -1) {
    nextLineEnd = state.value.length;
  }
  accClick = nextLineEnd + accClick + 1;
  textAreaInput.selectionStart = accClick;
  textAreaInput.selectionEnd = accClick;
});
*/

render(state);
