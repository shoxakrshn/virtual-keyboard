import { shiftMerged, merged } from './language.js';

const shift = (state) => {
  const keys = document.querySelectorAll('.key');
  keys.forEach((key, index) => {
    if (!key.classList.contains('key_service') && !key.classList.contains('key_arrow')) {
      // key.textContent = state.shift ? shiftMerged[state.lang][index] : merged[state.lang][index];
      if (state.shift && state.capsLock) {
        key.textContent = shiftMerged[state.lang][index].toLowerCase();
      } else if (!state.shift && state.capsLock) {
        key.textContent = merged[state.lang][index].toLowerCase().toUpperCase();
      } else if (state.shift && !shift.capsLock) {
        key.textContent = shiftMerged[state.lang][index];
      } else {
        key.textContent = merged[state.lang][index];
      }
    }
  });
};

export default shift;
