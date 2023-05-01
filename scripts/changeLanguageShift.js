import { shiftMerged, merged } from './language.js';

const changeLanguage = (state) => {
  const keys = document.querySelectorAll('.key');
  keys.forEach((key, index) => {
    if (!key.classList.contains('key_service') && !key.classList.contains('key_arrow')) {
      key.textContent = state.shift ? shiftMerged[state.lang][index] : merged[state.lang][index];
    }
  });
};

export default changeLanguage;
