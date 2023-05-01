export const createElement = (tagName, styles = []) => {
  const element = document.createElement(tagName);

  if (!styles.length) {
    return element;
  }

  styles.forEach((item) => element.classList.add(item));
  return element;
};
