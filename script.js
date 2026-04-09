const progressCircle = document.getElementById('progressCircle');
const progressBox = document.getElementById('progressBox');
const valueInput = document.getElementById('valueInput');
const animateInput = document.getElementById('animateInput');
const hideInput = document.getElementById('hideInput');

const radius = 64;
const circumference = 2 * Math.PI * radius;

progressCircle.style.strokeDasharray = String(circumference);
progressCircle.style.strokeDashoffset = String(circumference);

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function setProgress(value) {
  const safeValue = clamp(Number(value) || 0, 0, 100);
  const offset = circumference * (1 - safeValue / 100);
  progressCircle.style.strokeDashoffset = String(offset);
}

function updateValue() {
  const safeValue = clamp(Number(valueInput.value) || 0, 0, 100);
  valueInput.value = String(safeValue);
  setProgress(safeValue);
}

function updateAnimation() {
  progressBox.classList.toggle('is-animated', animateInput.checked);
}

function updateVisibility() {
  progressBox.classList.toggle('is-hidden', hideInput.checked);
}

valueInput.addEventListener('input', updateValue);
valueInput.addEventListener('change', updateValue);

animateInput.addEventListener('change', updateAnimation);
hideInput.addEventListener('change', updateVisibility);

updateValue();
updateAnimation();
updateVisibility();