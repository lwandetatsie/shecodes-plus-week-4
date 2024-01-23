//Implement the 2 following features:
//⏰Feature #1
//In your project, display the current date and time using JavaScript: Tuesday 16:00

now = new Date();
let currentTime = new Date();
console.log(now);

let hour = now.getHours();
let minutes = now.getMinutes();
let day = now.getDay();

if (minutes < 10) {
  minutes = `0${minutes}`;
}

if (hour < 10) {
  hour = `0${hour}`;
}

function formatDay(day) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formatDay = days[day.getDay()];
  let completeFormatDay = `${formatDay}`;
  return completeFormatDay;
}

console.log(formatDay(now));
console.log(hour);
console.log(minutes);
console.log(day);

let newTime = `${hour}:${minutes}`;
let newDay = `${formatDay(now)}`;

console.log(newDay);
console.log(newTime);

let replaceDay = document.querySelector("#day");
replaceDay.replaceWith(newDay);

let replaceTime = document.querySelector("#time");
replaceTime.replaceWith(newTime);

//🕵️‍♀️Feature #2
//Add a search engine: a search bar with a button. When searching for a city (i.e. Paris), display the city name on the page after the user submits the form.
//Code it inside VS Code or Sandbox. Move your code into a CodeSandbox and submit the URL of the working version.
function replaceCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  let changeCity = document.querySelector("#city-name");
  changeCity.innerHTML = cityInput.value;
}
let cityValue = document.querySelector("#city-form");
cityValue.addEventListener("submit", replaceCity);
