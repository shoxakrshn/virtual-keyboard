import createElement from '../common.js';

const createComponent = (row, language) => {
  const arrowContainer = createElement('div', ['keyboard__key', 'arrow-container']);

  language.forEach((item) => {
    const key = createElement('div', ['keyboard__key', 'key']);
    key.textContent = item;

    switch (item) {
      case 'Backspace':
        key.classList.add('key_service', 'key_delete', 'key_service-right');
        key.textContent = 'delete';
        break;

      case 'Tab':
        key.classList.add('key_service', 'key_tab');
        key.textContent = 'tab';
        break;

      case 'Enter':
        key.classList.add('key_service', 'key_return', 'key_service-right');
        key.textContent = 'return';
        break;

      case 'CapsLock':
        key.classList.add('key_service', 'key_caps-lock');
        key.textContent = 'caps lock';
        break;

      case 'Shift':
        key.classList.add('key_service', 'key_shift');
        key.textContent = 'shift';
        break;

      case 'Control':
        key.classList.add('key_service', 'key_service');
        key.textContent = 'control';
        break;

      case 'Alt':
        key.classList.add('key_service', 'key_service-center');
        key.textContent = 'option';
        break;

      case 'Meta':
        key.classList.add('key_service', 'key_cmd');
        key.textContent = 'command';
        break;

      case 'ArrowLeft':
        key.classList.add('key_arrow', 'key_arrow-left');
        key.textContent = '►';
        break;

      case 'ArrowRight':
        key.classList.add('key_arrow', 'key_arrow-right');
        key.textContent = '►';
        break;

      case 'ArrowUp':
        key.classList.add('key_arrow', 'key_arrow-up');
        key.textContent = '▲';
        arrowContainer.append(key);
        break;

      case 'ArrowDown':
        key.classList.add('key_arrow', 'key_arrow-down');
        key.textContent = '▼';
        arrowContainer.append(key);
        break;

      case ' ':
        key.classList.add('key_service', 'key_space');
        break;

      case 'fn':
        key.classList.add('key_service');
        break;

      default:
        break;
    }

    if (item === 'ArrowUp') {
      row.append(arrowContainer);
    }

    if (item !== 'ArrowUp' && item !== 'ArrowDown') {
      row.append(key);
    }
  });
};

export default createComponent;
