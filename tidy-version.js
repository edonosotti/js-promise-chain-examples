'use strict'

function doAction(action) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${action}: done.`)
    }, 1000)
  })
}

console.log('Getting ready to drive the car...')

// Individually invoke each Promise and pass
// the return value to the next one in the chain

var unlockCar = doAction('Unlock the car')

var openCarDoor = unlockCar.then(result => {
  console.log(result) // Result from unlockCar
  return doAction('Open the car door')
})

var getOnBoard = openCarDoor.then(result => {
  console.log(result) // Result from openCarDoor
  return doAction('Get on board')
})

var insertKey = getOnBoard.then(result => {
  console.log(result) // Result from getOnBoard
  return doAction('Insert key')
})

var turnKey = insertKey.then(result => {
  console.log(result) // Result from insertKey
  return doAction('Turn key')
})

var releaseBrake = turnKey.then(result => {
  console.log(result) // Result from turnKey
  return doAction('Release brake')
})

var engageGear = releaseBrake.then(result => {
  console.log(result) // Result from releaseBrake
  return doAction('Engaging gear')
})

engageGear.then(result => {
  console.log(result) // Result from engageGear
  console.log('Godspeed!')
})
