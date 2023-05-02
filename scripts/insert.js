export const insert = (state, type, textAreaInput) => {
  state.position = textAreaInput.selectionStart;

  const valueArray = state.value.split('');
  valueArray.splice(state.position, 0, type);

  state.value = valueArray.join('');

  textAreaInput.value = state.value;
  textAreaInput.selectionStart = state.position + 1;
  textAreaInput.selectionEnd = state.position + 1;
  textAreaInput.focus();
};

export const insertBackspace = (state, textAreaInput) => {
  if (textAreaInput.selectionStart === 0 && textAreaInput.selectionEnd === state.value.length) {
    state.value = '';
    textAreaInput.value = state.value;
    textAreaInput.selectionStart = 0;
    textAreaInput.selectionEnd = 0;
    state.position = 0;
    return;
  }

  state.position = textAreaInput.selectionStart; // Запоминаем начальную позицию курсора

  if (state.position > 0) {
    const valueArray = state.value.split(''); // Преобразуем значение в массив символов
    valueArray.splice(state.position - 1, 1); // Удаляем символ на позиции перед курсором

    state.value = valueArray.join(''); // Обновляем значение состояния

    textAreaInput.value = state.value;
    textAreaInput.selectionStart = state.position - 1; // Устанавливаем позицию курсора
    textAreaInput.selectionEnd = state.position - 1;
    textAreaInput.focus();
  }
};
