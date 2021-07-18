const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let data = {
    name,
    email,
  };

  let convertData = JSON.stringify(data);

  localStorage.setItem("lead", convertData);

  let content = document.querySelector("#content");

  let loading = `<p>Loading...</p>`;
  let done = `<p>Done</p>`;

  content.innerHTML = loading;

  setTimeout(() => {
    content.innerHTML = done;
  }, 1000);
});

// Countdown
// const countdown = () => {
//   const countDate = new Date("November 26, 2021 00:00:00").getTime();
//   const now = new Date().getTime();
//   const gap = countDate - now;

//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   const textDay = Math.floor(gap / day);
//   const textHour = Math.floor((gap % hour) / hour);
//   const textMinute = Math.floor((gap % minute) / minute);
//   const textSecond = Math.floor((gap % second) / second);

//   document.querySelector(".day").innerHTML = textDay;
//   document.querySelector(".hour").innerHTML = textHour;
//   document.querySelector(".minute").innerHTML = textMinute;
//   document.querySelector(".second").innerHTML = textSecond;

//   console.log(textDay);
// };

// countdown();

const daysEL = document.querySelector(".day");
const hourEL = document.querySelector(".hour");
const minsEL = document.querySelector(".minute");
const secondsEL = document.querySelector(".second");

const BlackFriday = "26 November 2021";

function countdown() {
  const newBlackFriday = new Date(BlackFriday);
  const currentDate = new Date();

  const totalSeconds = (newBlackFriday - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysEL.innerHTML = days;
  hourEL.innerHTML = formatTime(hours);
  minsEL.innerHTML = formatTime(mins);
  secondsEL.innerHTML = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
countdown();

setInterval(countdown, 1000);
