const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function Start() {
  if (!isRunning) {
    startTime = Date.now() - elapsedTime; //used to ensure that the stop watch resumes from where it was paused
    timer = setInterval(update, 10);
    isRunning = true;
  }
}
function Stop() {
  if (isRunning) {
    clearInterval(timer);
    elapsedTime = Date.now() - startTime;//updates the elapsed time to the total time that has passed 
    isRunning = false;
  }
}
function Reset() {
  clearInterval(timer);
  startTime = 0;
  elapsedTime = 0;
  isRunning = false;
  display.textContent = "00:00:00:00";
}
function update() {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;
  let Hours = Math.floor(elapsedTime / (1000 * 60 * 60));
  let Minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
  let Seconds = Math.floor((elapsedTime / 1000) % 60);
  let Milliseconds = Math.floor((elapsedTime % 1000) / 10);
  Hours = String(Hours).padStart(2, "0");
  Minutes = String(Minutes).padStart(2, "0");
  Seconds = String(Seconds).padStart(2, "0");
  Milliseconds = String(Milliseconds).padStart(2, "0");
  display.textContent = `${Hours}:${Minutes}:${Seconds}:${Milliseconds}`;
}
