import { createElement } from '../common.js';

const createComponent = (row, language) => {
  const arrowContainer = createElement('div', ['keyboard__key', 'arrow-container']);
  const { key, code } = language;

  key.forEach((item, index) => {
    const element = createElement('div', ['keyboard__key', 'key']);
    element.textContent = item;
    element.dataset.key = code[index];

    switch (item) {
      case 'Backspace':
        element.classList.add('key_service', 'key_delete', 'key_service-right');
        element.textContent = 'delete';
        break;

      case 'Tab':
        element.classList.add('key_service', 'key_tab');
        element.textContent = 'tab';
        break;

      case 'Enter':
        element.classList.add('key_service', 'key_return', 'key_service-right');
        element.textContent = 'return';
        break;

      case 'CapsLock':
        element.classList.add('key_service', 'key_caps-lock');
        element.textContent = 'caps lock';
        break;

      case 'Shift':
        if (code[index] === 'ShiftRight') {
          element.classList.add('key_service-right');
        }
        element.classList.add('key_service', 'key_shift');
        element.textContent = 'shift';
        break;

      case 'Control':
        element.classList.add('key_service', 'key_service');
        element.textContent = 'control';
        break;

      case 'Alt':
        element.classList.add('key_service', 'key_service-center');
        element.textContent = 'option';
        break;

      case 'Meta':
        element.classList.add('key_service', 'key_cmd');
        element.textContent = 'command';
        break;

      case 'ArrowLeft':
        element.classList.add('key_arrow', 'key_arrow-left');
        element.textContent = '►';
        break;

      case 'ArrowRight':
        element.classList.add('key_arrow', 'key_arrow-right');
        element.textContent = '►';
        break;

      case 'ArrowUp':
        element.classList.add('key_arrow', 'key_arrow-up');
        element.textContent = '▲';
        arrowContainer.append(element);
        break;

      case 'ArrowDown':
        element.classList.add('key_arrow', 'key_arrow-down');
        element.textContent = '▼';
        arrowContainer.append(element);
        break;

      case ' ':
        element.classList.add('key_service', 'key_space');
        break;

      case 'fn':
        element.classList.add('key_service');
        break;

      default:
        break;
    }

    if (item === 'ArrowUp') {
      row.append(arrowContainer);
    }

    if (item !== 'ArrowUp' && item !== 'ArrowDown') {
      row.append(element);
    }
  });
};

export default createComponent;
