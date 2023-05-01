const capsLock = (state) => {
  const keys = document.querySelectorAll('.key');

  keys.forEach((key) => {
    if (!key.classList.contains('key_service')) {
      const { textContent } = key;
      const upperCase = state.capsLock ? textContent.toUpperCase() : textContent.toLowerCase();
      key.textContent = upperCase;
    }
  });
};

export default capsLock;
