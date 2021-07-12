const refs = {
  btnStart: document.querySelector('button[data-action="start"]'),
  btnStop: document.querySelector('button[data-action="stop"]'),
  body: document.querySelector('body'),
};
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
let intervalId = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const setBodyColor = () => {
  const idx = randomIntegerFromInterval(0, 5);
  refs.body.style.backgroundColor = `${colors[idx]}`;
};

const onBtnClick = evt => {
  if (evt.target === refs.btnStart) {
    refs.btnStart.disabled = true;
    intervalId = setInterval(setBodyColor, 1000);
  }
  if (evt.target === refs.btnStop) {
    clearInterval(intervalId);
    refs.btnStart.disabled = false;
  }
};

document.addEventListener('click', onBtnClick);