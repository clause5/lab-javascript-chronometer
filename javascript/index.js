const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDec = document.getElementById('minDec');
const minUni = document.getElementById('minUni');
const secDec = document.getElementById('secDec');
const secUni = document.getElementById('secUni');
const milDec = document.getElementById('milDec');
const milUni = document.getElementById('milUni');
const splits = document.getElementById('splits');

function printTime() {
  // ... your code goes here
  printMilliseconds();
  printMinutes();
  printSeconds();
}

function printMinutes() {
  // ... your code goes here
  let minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  minutes = minutes.split('');
  minDec.innerText = minutes[0];
  minUni.innerText = minutes[1];
}

function printSeconds() {
  // ... your code goes here
  let seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  seconds = seconds.split('');
  secDec.innerText = seconds[0];
  secUni.innerText = seconds[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
  let secondsToMilliseconds = (chronometer.computeTwoDigitNumber(chronometer.getMilliseconds()));
  secondsToMilliseconds = secondsToMilliseconds.split('');
  milDec.innerHTML = secondsToMilliseconds[0];
  milUni.innerHTML = secondsToMilliseconds[1];
}

function printSplit() {
  // ... your code goes here
  let splitsItem = document.createElement('li');
  splitsItem.innerHTML = `${chronometer.computeTwoDigitNumber(chronometer.getMinutes())}:${chronometer.computeTwoDigitNumber(chronometer.getSeconds())}:${chronometer.computeTwoDigitNumber(chronometer.getMilliseconds())}`;
  splits.appendChild(splitsItem);
}

function clearSplits() {
  // ... your code goes here
  splits.innerHTML ='';
}

function setStopBtn() {
  // ... your code goes here
  btnLeft.innerHTML = "STOP";
  btnLeft.setAttribute('class', 'btn stop');
}

function setSplitBtn() {
  // ... your code goes here
  btnRight.innerHTML = "SPLIT";
  btnRight.setAttribute('class', 'btn split');
}

function setStartBtn() {
  // ... your code goes here
  btnLeft.innerHTML = "START";
  btnLeft.setAttribute('class', 'btn start');
}

function setResetBtn() {
  // ... your code goes here
  btnRight.innerHTML = "RESET";
  btnRight.setAttribute('class', 'btn reset');
}

// Start/Stop Button
let runningClock = false;

btnLeft.addEventListener('click', () => {
  // ... your code goes here
  runningClock = !runningClock;

  if(runningClock){
    setStopBtn();
    setSplitBtn();
  
  chronometer.start()
        setInterval(() => {
             printTime();
        }, 1000);
 
}else{
  setStartBtn();
  setResetBtn();
  chronometer.stop();
}

});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  // ... your code goes here
  if (btnRight.className === 'btn reset'){
    clearSplits();
    chronometer.reset();
  }else{
    printSplit();
  }

  
  
});