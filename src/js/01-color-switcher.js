const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
const body = document.querySelector('body');

let intervalId = null;

startButton.addEventListener('click', startChangeColor);

stopButton.addEventListener('click', stopChangeColor)

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeColor() {
    body.style.backgroundColor = getRandomHexColor()
}

function startChangeColor() {
    startButton.setAttribute('disabled', '');
    stopButton.removeAttribute('disabled');
    intervalId = setInterval(changeColor, 1000)
}

function stopChangeColor() {
    clearInterval(intervalId);
    startButton.removeAttribute('disabled');
    stopButton.setAttribute('disabled', '');
}