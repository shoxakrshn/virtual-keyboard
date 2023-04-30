import { createElement } from '../common.js';

const subtitileText = 'MacBook Air';

const createComponent = (state) => {
  const { value } = state;
  const textAreaBlock = createElement('div', ['text-area']);
  const textAreaInput = createElement('textarea', ['text-area__input']);
  const subtitile = createElement('h3', ['text-area__subtitle']);

  textAreaInput.value = value;
  subtitile.textContent = subtitileText;

  textAreaBlock.append(textAreaInput, subtitile);
  return textAreaBlock;
};

export default createComponent;
