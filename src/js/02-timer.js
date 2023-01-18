import flatpickr from "flatpickr";
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';


const inputRef = document.getElementById(`datetime-picker`);
const dayRef = document.querySelector(`[data-days]`);
const hourRef = document.querySelector(`[data-hours]`);
const minuteRef = document.querySelector(`[data-minutes]`);
const secondRef = document.querySelector(`[data-seconds]`);
const buttonStart = document.querySelector(`[data-start]`);

let timerId = null;

buttonStart.setAttribute('disabled', '');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      if (selectedDates[0] < options.defaultDate) {
        Notify.failure('Please choose a date in the future');
      } else {
          options.defaultDate = selectedDates[0];
          buttonStart.removeAttribute('disabled');
    }
  },
};

flatpickr(inputRef, options);

buttonStart.addEventListener('click', startTimer)

function startTimer() {
    timerId = setInterval(()=> {
      const deltaTime = options.defaultDate - Date.now() ;
      if (deltaTime < 1000) {
          clearInterval(timerId);
          Notify.success('Time is over!!!');
        }
      const time = convertMs(deltaTime);
      showTime(time);
    },1000);
}

function convertMs(ms) {
  
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  
  const hours = Math.floor((ms % day) / hour);
 
  const minutes = Math.floor(((ms % day) % hour) / minute);
  
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
    return String(value).padStart(2, 0)
}
  
function showTime ({days, hours, minutes, seconds}) {
    dayRef.textContent = addLeadingZero(days);
    hourRef.textContent = addLeadingZero(hours);
    minuteRef.textContent = addLeadingZero(minutes);
    secondRef.textContent = addLeadingZero(seconds);
 }