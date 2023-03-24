const refs = {//об'єкт з властивостями startButton і stopButton
startButton: document.querySelector('button[data-start]'),
stopButton: document.querySelector('button[data-stop]'),
}
//1. При нажиманні на кнопку змінюється колір body
refs.startButton.addEventListener('click', handleStartBtnClick);
refs.stopButton.addEventListener('click', handleStopBtnClick);

let intervalID = null; //таймер
//2 використовувати метод setInterval() - викликати функцію з інтервалом в 1000ms
function handleStartBtnClick() {
    if (intervalID === null) {
        refs.startButton.disabled = true; //кнопка неактивна
    intervalID = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor()
    }, 1000);
    }    
}
//3 Натисканням на кнопку «Stop» зміна кольору фону повинна зупинятися.
function handleStopBtnClick() {
    clearInterval(intervalID);
    intervalID = null;// зупинка таймера
    refs.startButton.disabled = false; //кнопка активна
}
function getRandomHexColor() {//генерування випадкового кольору
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}