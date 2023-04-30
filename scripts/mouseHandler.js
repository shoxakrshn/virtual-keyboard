export default (keyboard, textAreaInput, state, render) => {
  const deleteBtn = keyboard.querySelector('.key_delete');
  const enterBtn = keyboard.querySelector('.key_return');
  const tabBtn = keyboard.querySelector('.key_tab');
  const leftBtn = keyboard.querySelector('.key_arrow-left');
  const rightBtn = keyboard.querySelector('.key_arrow-right');
  const capsBtn = keyboard.querySelector('.key_caps-lock');
  const fnBtn = keyboard.querySelector('.key_fn');
  const shiftBtn = keyboard.querySelectorAll('.key_shift');

  //const upBtn = keyboard.querySelector('.key_arrow-up');
  //const downBtn = keyboard.querySelector('.key_arrow-down');

  const keys = keyboard.querySelectorAll('.key');
  keys.forEach((key) => {
    key.addEventListener('click', (e) => {
      if (!key.classList.contains('key_service') && !key.classList.contains('key_arrow')) {
        state.value += e.target.textContent;
        textAreaInput.value = state.value;
      }
    });
  });

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

  state.position = state.value.length;
  leftBtn.addEventListener('click', () => {
    textAreaInput.focus();
    if (state.position !== 0) {
      state.position -= 1;
      textAreaInput.selectionStart = state.position;
      textAreaInput.selectionEnd = state.position;
    }
  });

  rightBtn.addEventListener('click', () => {
    const { value } = state;
    textAreaInput.focus();

    if (state.position !== value.length) {
      state.position += 1;
      textAreaInput.selectionStart = state.position;
      textAreaInput.selectionEnd = state.position;
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

  /*
upBtn.addEventListener('click', () => {
  textAreaInput.focus();
  let previousLineStart = state.value.lastIndexOf('\n');

  if (previousLineStart === -1) {
    previousLineStart = 0;
  } else {
    previousLineStart = state.position - previousLineStart - 1; // Игнорировать символ новой строки
  }
  state.position = previousLineStart;
  console.log('new position:', previousLineStart);
  textAreaInput.selectionStart = state.position;
  textAreaInput.selectionEnd = state.position;
});

downBtn.addEventListener('click', () => {
  textAreaInput.focus();
  let nextLineEnd = state.value.indexOf('\n', state.position);
  console.log('next:', nextLineEnd);

  if (nextLineEnd === -1) {
    nextLineEnd = state.value.length;
  }
  state.position = nextLineEnd + state.position + 1;
  textAreaInput.selectionStart = state.position;
  textAreaInput.selectionEnd = state.position;
});
*/
};
