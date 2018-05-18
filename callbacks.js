class Clock {
  constructor() {
    // 1. Create a Date object.
    const date = new Date();
    // 2. Store the hours, minutes, and seconds.
    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();
    // 3. Call printTime.
    this.printTime();
    // 4. Schedule the tick at 1 second intervals.
    setInterval( this._tick.bind(this), 1000);
  }

  printTime() {
    this.hours = (this.hours < 10 && this.hours.toString().length < 2) ? "0" + this.hours : this.hours;
    this.minutes = (this.minutes < 10 && this.minutes.toString().length < 2) ? "0" + this.minutes : this.minutes;
    this.seconds = (this.seconds < 10 && this.seconds.toString().length < 2) ? "0" + this.seconds : this.seconds;

    console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
    // Format the time in HH:MM:SS
    // Use console.log to print it.
  }

  _tick() {
    // 1. Increment the time by one second.
    this.increment_secs();
    // 2. Call printTime.
    this.printTime();
  }

  increment_secs() {
    this.seconds += 1;
    if (this.seconds === 60) {
      this.seconds = 0;
      this.increment_mins();
    }
  }
  increment_mins() {
    this.minutes += 1;
    if (this.minutes === 60) {
      this.minutes = 0;
      this.increment_hours();
    }
  }
  increment_hours() {
    this.hours += 1;
    if (this.hours === 24) {
      this.hours = 0;
    }
  }
}

const clock = new Clock();
