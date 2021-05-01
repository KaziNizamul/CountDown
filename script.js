const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');


const newYear = "01-Jan-2022";

function countdown() {
  const newYearDate = new Date(newYear); // to date
  const currentDate = new Date(); // current date

  const milisecs = newYearDate - currentDate;

  const days = Math.floor(milisecs / 1000 / 60 / 60 / 24);
  const hours = Math.floor(milisecs / 1000 / 60 / 60) % 24;
  const mins = Math.floor(milisecs / 1000 / 60) % 60;
  const secs = Math.floor(milisecs / 1000) % 60;

    
  daysEl.innerHTML = days;
  hoursEl.innerHTML = hours;
  minsEl.innerHTML = mins;
  secondsEl.innerHTML = secs;
    

}
setInterval(countdown, 1000);
countdown(); // initialization
