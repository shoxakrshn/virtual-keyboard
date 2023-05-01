import createElement from '../createElement.js';

const subtitileText = 'change language<br>press: option + control or click: fn';
const hintSubtitile = createElement('h3', ['text-area__subtitle', 'hint']);
hintSubtitile.innerHTML = subtitileText;
export default hintSubtitile;
