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
    // ******* Bonus *******
    // The Elevator will automatically keep on serving all the people in the waiting list
    // Algo: go the highest destination floor in the passenger list, dropping off or picking up people at each floor
    while (this.requests.length != 0 ) { //  <= Equal to => (this.passengers.length != 0 && this.waitingList.length != 0)
      let max_floor = Math.max(...this.requests)
      if (this.floor < max_floor) {
        do {
          this.floorUp()
        } while (this.floor < max_floor)
      }
      else {
        do {
          this.floorDown()
        } while (this.floor > max_floor)
      }
    }
    if (this.requests.length === 0) {
      console.log('My job is done here')
    }
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
        if (this.requests.indexOf(person.destinationFloor) === -1) {
          this.requests.push(person.destinationFloor)
        }
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
    if (this.floor < this.MAXFLOOR) {
      this.floor += 1
      console.log('Floor ', this.floor)
      this._passengersEnter()
      this._passengersLeave()
      this._deleteFromRequest(this.floor)
    }
  }

  floorDown() {
    if (this.floor > 0) {
      this.floor -= 1
      console.log('Floor ', this.floor)
      this._passengersEnter()
      this._passengersLeave()
      this._deleteFromRequest(this.floor)
    } 
  }

  call (person) {
    this.waitingList.push(person)
    if (this.requests.indexOf(person.originFloor) === -1) {
      this.requests.push(person.originFloor)
    }
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

  _deleteFromRequest (floor) {
    if (this.requests.indexOf(floor) != -1) this.requests.splice(this.requests.indexOf(floor), 1)
  }
}

module.exports = Elevator;
