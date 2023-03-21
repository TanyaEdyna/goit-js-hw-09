import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const refs = {
    inputEl: document.querySelector('#datetime-picker'),
    startBtn: document.querySelector('button[data-start]'),
    numberOfDays: document.querySelector('span[data-days]'),
    numberOfHours: document.querySelector('span[data-hours]'),
    numberOfMinutes: document.querySelector('span[data-minutes]'),
    numberOfSeconds: document.querySelector('span[data-seconds]'),
}

let dateSelectedByUser = null;//дата яку вибрав користувач 

const options = {
    enableTime: true,
    time_24hr: true,
    minuteIncrement: 1,
    onClose(selectedDates) {//onClose викликається, коли користувач вибирає дату в календарі, і встановлює вибрану дату в dateSelectedByUser.
        dateSelectedByUser = selectedDates[0];
        getValidDate();
    },
};

function getValidDate() {
    const actualDate = new Date();
    if (dateSelectedByUser < actualDate) {
        Notiflix.Notify.failure('Please choose a date in the future');
        refs.startBtn.disabled = true;
    } else {
        refs.startBtn.disabled = false;
    }
}

flatpickr('#datetime-picker', options);

let timerId = null; //це ідертифікатор таймера

refs.startBtn.addEventListener('click', () => {
    if (timerId === null) {
        timerId = setInterval(stopTimer, 1000);
        refs.startBtn.textContent = 'Stop';
    } else {
        clearInterval(timerId);
        timerId = null;
        refs.startBtn.textContent = 'Start';
    }
});

function stopTimer() {
    const millis = dateSelectedByUser - new Date();
    if (millis <= 0) {
        clearInterval(timerId);
        timerId = null;
        refs.startBtn.disabled = true;
        refs.startBtn.textContent = 'Start';
    }
    const amountTimeLeft = convertMs(millis);
    refs.numberOfDays.textContent = addLeadingZero(amountTimeLeft.days);
    refs.numberOfHours.textContent = addLeadingZero(amountTimeLeft.hours);
    refs.numberOfMinutes.textContent = addLeadingZero(amountTimeLeft.minutes);
    refs.numberOfSeconds.textContent = addLeadingZero(amountTimeLeft.seconds);
}

function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor((ms % hour) / minute);
    const seconds = Math.floor((ms % minute) / second);

    return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}