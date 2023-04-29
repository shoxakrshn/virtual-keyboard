import createElement from './scripts/common.js';
import createTextArea from './scripts/components/textarea.js';
import createKeyboard from './scripts/components/keyboard.js';

const { body } = document;
const main = createElement('main', ['main-wrap']);
const textArea = createTextArea();
const keyboard = createKeyboard();
main.append(textArea, keyboard);
body.append(main);

let row = [];

document.addEventListener('keydown', (e) => {
  console.log(e);
  console.log(e.key, e.code);
  row.push(e.key);
  console.log(row);
});

console.log(main);
