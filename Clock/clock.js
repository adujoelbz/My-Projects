//PART 1
/* function updateClock() {
  const date = new Date();
  const currentHour = date.getHours().toString().padStart(2, 0);
  const currentMinute = date.getMinutes().toString().padStart(2, 0);
  const currentSecond = date.getSeconds().toString().padStart(2, 0);
  let timeString = `${currentHour}:${currentMinute}:${currentSecond}`;
  const clock = document.getElementById("clock");
  clock.textContent = timeString;
} */

//PART 2
function updateClock() {
  const date = new Date();
  const meridiem = date.getHours();
  const currentHour = (meridiem % 12 || 12).toString().padStart(2, 0);
  if (meridiem >= 12) {
    state = "PM";
  } else {
    state = "AM";
  }
  const currentMinute = date.getMinutes().toString().padStart(2, 0);
  const currentSecond = date.getSeconds().toString().padStart(2, 0);
  let timeString = `${currentHour}:${currentMinute}:${currentSecond} ${state}`;
  const clock = document.getElementById("clock");
  clock.textContent = timeString;
}

setInterval(updateClock, 1000);
