const Elevator = require('./elevator.js');
const Person = require('./person.js');

const elevator = new Elevator()
const julia = new Person('Julia', 1, 5)
const kanye = new Person('Kanye', 3, 4)
const jad = new Person('Jad', 8, 2)
const eduardo = new Person('Eduardo', 5, 6)

elevator.call(julia)
elevator.call(kanye)
elevator.call(jad)
elevator.call(eduardo)

elevator.start()



// setTimeout( () => {
//   console.log('******* stop ******* (after 4 seconds)')
//   elevator.stop()
// }, 4000 )
