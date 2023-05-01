import render from './scripts/components/render.js';

const state = {
  value: '',
  lang: localStorage.getItem('lang') || 'en',
  capsLock: false,
  shift: false,
  position: 0,
  pressed: false,
};

render(state);
