class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId =null;
    this.splits =[];
  }

  start(callback) {
    // ... your code goes here
    this.intervalId = window.setInterval(() => {
      return this.currentTime++;
    }, 1000);
    
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime /60 );
  }

  getSeconds() {
    // ... your code goes here
    return (this.currentTime !=60 && this.currentTime != 0)?  this.currentTime % 60 : 0;
  }
  
  getMilliseconds(){
    let millisecs = Math.trunc(((this.currentTime * 1000) - ( this.getSeconds() * 1000 + this.getMinutes()* 60000 )/10));
    return (millisecs === 1000 && millisecs === 0 ) ? 0 : (millisecs % 1000 ) /10 ; 
  }

  computeTwoDigitNumber(time) {
    // ... your code goes here
    return time < 10 ? `0${time}`: `${time}`;
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }

  reset() {
    // ... your code goes here
    this.currentTime =0;
  }

  split() {
    // ... your code goes here
    let mins = this.computeTwoDigitNumber(this.getMinutes());
    let secs = this.computeTwoDigitNumber(this.getSeconds());
    let milli = this.computeTwoDigitNumber(this.getMilliseconds());
    // ... your code goes here
    let record = `${mins}:${secs}`;
    return record;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
