class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if (typeof printTimeCallback ===  'function'){
         printTimeCallback();
      }     
    }, 1000)
  }

  getMinutes() {
    if (this.currentTime === 0) {
      return 0
    } else {
      return Math.floor(this.currentTime / 60)
    }
  }

  getSeconds() {
    if (this.currentTime === 0) {
      return 0
    } else if (this.currentTime < 60) {
      return this.currentTime
    } else {
      let remainderSec = 0
      remainderSec = this.currentTime % 60
      return remainderSec
    }
  }

  computeTwoDigitNumber(value) {
    if (value === 0) {
      return '00'
    } else {
      let formattedValue = value.toString().padStart(2,'0')
      return formattedValue
    }
  }

  stop() {
    clearInterval(this.intervalId)

  }

  reset() {
    this.currentTime = 0
  }

  split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes())
    let seconds = this.computeTwoDigitNumber(this.getSeconds())
    return `${minutes}:${seconds}`
  }
}

