import createElement from '../createElement.js';

const subtitileText = 'Alt + Control or fn<br>change language';
const hintSubtitile = createElement('h3', ['text-area__subtitle', 'hint']);
hintSubtitile.innerHTML = subtitileText;
export default hintSubtitile;
