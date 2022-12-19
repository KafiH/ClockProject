
let [seconds, minutes, hours] = [0, 0, 0];
let timerRef = document.querySelector('.timerDisplay');
let bit = null;

document.getElementById('Start').addEventListener('click', () => {
  if (bit !== null) {
    clearInterval(bit);
  }
  bit = setInterval(displayTimer, 1000);
});

document.getElementById('Pause').addEventListener('click', () => {
  clearInterval(bit);
});

document.getElementById('Reset').addEventListener('click', () => {
  clearInterval(bit);
  [seconds, minutes, hours] = [0, 0, 0];
  timerRef.innerHTML = '00 : 00 : 00';
});

function displayTimer() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }
  let h = hours < 10 ? '0' + hours : hours;
  let m = minutes < 10 ? '0' + minutes : minutes;
  let s = seconds < 10 ? '0' + seconds : seconds;

  timerRef.innerHTML = `${h} : ${m} : ${s}`;
}


