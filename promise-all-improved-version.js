'use strict'

// We will use this variable to store return values
// while the Promises in the chain are resolved
var results = [];

function doAction(action) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(results) // Return values are added at each invocation
      results.push(`${action}: done.`)
      resolve()
    }, 1000)
  })
}

console.log('Getting ready to ride the car...')

var unlockCar = doAction('Unlock the car')

var openCarDoor = doAction('Open the car door')

var getOnBoard = doAction('Get on board')

var insertKey = doAction('Insert key')

var turnKey = doAction('Turn key')

var releaseBrake = doAction('Release brake')

var engageGear = doAction('Engaging gear')

Promise.all([
  unlockCar,
  openCarDoor,
  getOnBoard,
  insertKey,
  turnKey,
  releaseBrake,
  engageGear
]).then(result => {
  console.log('Godspeed!')
})
