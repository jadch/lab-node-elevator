class Elevator {
  constructor(){
    this.floor       = 0;
    this.MAXFLOOR    = 10;
    this.waitingList = [];
    this.passengers  = [];
    this.requests    = [];
    this.direction   = 'up';
    this.intervalID  = 0;
  }

  start() {
    this.intervalID = setInterval( () => {
      this.update()
    }, 1000)
  }

  stop() {
    clearInterval(this.intervalID)
  }

  update() {
    this.log()
  }

  _passengersEnter() {
    this.waitingList.forEach( (person) => {
      if (person.originFloor === this. floor) {
        this.passengers.push(person)
        this._deleteFromWaitingList(person.name)
        this.requests.push(person.destinationFloor)
        console.log(`${person.name} has just entered the elevator on floor ${this.floor}`)
      }
    })
  }

  _passengersLeave() {
    for (var i = 0; i < this.passengers.length; i++){
      if (this.passengers[i].destinationFloor === this.floor) {
        console.log(`${this.passengers[i].name} has left the elevator on floor ${this.floor}`)
        this._deleteFromPassengerList(this.passengers[i].name)
      }
    }
  }

  floorUp() {
    if (this.floor < this.MAXFLOOR) this.floor += 1
    console.log(this.floor)
    this._passengersEnter()
    this._passengersLeave()
  }

  floorDown() {
    if (this.floor > 0) this.floor -= 1
    console.log(this.floor)
    this._passengersEnter()
    this._passengersLeave()
  }

  call (person) {
    this.waitingList.push(person)
    this.requests.push(person.originFloor)
  }

  log() {
    console.log(`Direction: ${this.direction} | Floor: ${this.floor}`)
  }

  _deleteFromWaitingList (name) {
    for (let i = 0; i < this.waitingList.length; i++){
      if (this.waitingList[i].name === name) {
        this.waitingList.splice(i, 1)
        return i
      }
    }
  }

  _deleteFromPassengerList (name) {
    for (let i = 0; i < this.passengers.length; i++){
      if (this.passengers[i].name === name) {
        this.passengers.splice(i, 1)
        return i
      }
    }
  }
}

module.exports = Elevator;
