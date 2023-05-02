export const insertTabSpaceReturn = (state, type, textAreaInput) => {
  let newWord = '';

  if (textAreaInput.selectionStart === state.value.length) {
    state.value += type;
    textAreaInput.value = state.value;
    textAreaInput.focus();
  } else {
    for (let i = 0; i < state.value.length; i += 1) {
      if (i === textAreaInput.selectionStart) {
        state.position = i + 1;
        newWord += type;
      }
      newWord += state.value[i];
    }
    state.value = newWord;
    textAreaInput.value = state.value;
    textAreaInput.focus();

    setTimeout(() => {
      textAreaInput.selectionStart = state.position;
      textAreaInput.selectionEnd = state.position;
    }, 0);
  }
};

export default insertTabSpaceReturn;
