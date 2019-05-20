'use strict'

function doAction(action) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${action}: done.`)
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

// This is a better approach to invoke
// each Promise in a precise order, keeping
// the code clean and collecting the return
// values. Such values will be available at
// the end of the chain, when all Promise(s)
// will be resolved. You can work around this
// saving the results in variables defined in
// the global scope (see the "improved" version
// of this script for details).

Promise.all([
  unlockCar,
  openCarDoor,
  getOnBoard,
  insertKey,
  turnKey,
  releaseBrake,
  engageGear
]).then(result => {
  console.log(result)
  console.log('Godspeed!')
})
