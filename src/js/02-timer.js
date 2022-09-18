import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const input = document.querySelector("#datetime-picker");
const btnStart = document.querySelector("button");
const dataDays = document.querySelector("[data-days]");
const dataHours = document.querySelector("[data-hours]");
const dataMinutes = document.querySelector("[data-minutes]");
const dataSeconds = document.querySelector("[data-seconds]");

const currentTime = new Date();
btnStart.disabled = true;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0] <= currentTime) {
          // window.alert('Please choose a date in the  future');
        Notify.warning('Please choose a date in the  future');
      } else {
        btnStart.disabled = false;
      }
    },
};
btnStart.addEventListener('click', onBtnClick);
flatpickr(input, options);

let timerId = null;
function onBtnClick() {
    const inputDate = new Date(input.value);
  
    btnStart.disabled = true;
    timerId = setInterval(() => {
        const timeSubtraction = inputDate - new Date();
        const time = convertMs(timeSubtraction);
        console.log(convertMs(timeSubtraction));
        updateTime(time);
        if (timeSubtraction < 1000) {
            clearInterval(timerId);
            Notify.info('It is a time!!!');
        }
    }, 1000);
};
function updateTime({ days, hours, minutes, seconds }) {
    dataDays.textContent = days;
    dataHours.textContent = hours;
    dataMinutes.textContent = minutes;
    dataSeconds.textContent = seconds;
  }
  
  btnStart.disabled = true;
  
  function addCorrectLength(value) {
    return String(value).padStart(2, '0');
  }
  
  function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    const days = addCorrectLength(Math.floor(ms / day));
    const hours = addCorrectLength(Math.floor((ms % day) / hour));
    const minutes = addCorrectLength(Math.floor(((ms % day) % hour) / minute));
    const seconds = addCorrectLength(Math.floor((((ms % day) % hour) % minute) / second));
  
    return { days, hours, minutes, seconds };
  }