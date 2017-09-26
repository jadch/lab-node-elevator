const Elevator = require('./elevator.js');
const Person = require('./person.js');

const elevator = new Elevator()
const julia = new Person('Julia', 1, 5)

elevator.call(julia)
elevator.log()

// console.log('******* start *******')
// elevator.start()


// setTimeout( () => {
//   console.log('******* stop ******* (after 4 seconds)')
//   elevator.stop()
// }, 4000 )

elevator.floorUp()
elevator.floorUp()
elevator.floorUp()
elevator.floorUp()
elevator.floorUp()
elevator.floorUp()
