import { createElement, metaKeys } from './scripts/common.js';
import createTextArea from './scripts/components/textarea.js';
import createKeyboard from './scripts/components/keyboard.js';

const state = {
  value: '',
  lang: 'ru',
  capsLock: false,
  shift: false,
};

const { body } = document;
const main = createElement('main', ['main-wrap']);
const textArea = createTextArea(state);
const keyboard = createKeyboard(state);
main.append(textArea, keyboard);
body.append(main);



/*
textArea.addEventListener('input', (e) => {
  state.value = e.target.value;
  console.log(state.value);
});
*/
const textAreaInput = textArea.querySelector('.text-area__input');

document.addEventListener('keydown', (e) => {
  const el = document.querySelector(`[data-key=${e.code}]`);
  el.classList.add('pressed');

  if (!metaKeys.includes(e.key)) {
    state.value += el.textContent;
    textAreaInput.value = state.value;
  }
 // console.log(state);
});

document.addEventListener('keyup', (e) => {
  document.querySelectorAll('.key').forEach((key) => key.classList.remove('pressed'));
});

textAreaInput.value = state.value;

const keys = keyboard.querySelectorAll('.key');
keys.forEach((key) => {
  key.addEventListener('click', (e) => {
    if (!key.classList.contains('key_service')) {
      state.value += e.target.textContent;
      textAreaInput.value = state.value;
    }
  });
});


/*
let row = [];
document.addEventListener('keydown', (e) => {
  row.push(e.key);
  console.log(row)
})
*/