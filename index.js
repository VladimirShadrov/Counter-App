const counter = document.querySelector('.counter__value');
const increaseBtn = document.querySelector('.button__increase');
const resetBtn = document.querySelector('.button__reset');
let counterValue = 0;

increaseBtn.addEventListener('click', increaseCounter);
resetBtn.addEventListener('click', resetCounter);

function increaseCounter() {
  counterValue += 1;
  updateCounter(counterValue);
}

function resetCounter() {
  counterValue = 0;
  updateCounter(counterValue);
}

function updateCounter(val) {
  counter.innerText = val;
}

updateCounter(counterValue);
