import createElement from '../common.js';

const subtitileText = 'MacBook Air';

const createComponent = () => {
  const textAreaBlock = createElement('div', ['text-area']);
  const textAreaInpit = createElement('textarea', ['text-area__input']);
  const subtitile = createElement('h3', ['text-area__subtitle']);
  subtitile.textContent = subtitileText;

  textAreaBlock.append(textAreaInpit, subtitile);
  return textAreaBlock;
};

export default createComponent;
