'use strict'

function doAction(action) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${action}: done.`)
    }, 1000)
  })
}

console.log('Getting ready to drive the car...')

// Welcome to the "callback hell", the place where
// all bad programmers go ;)
// This is an example of how NOT to write JS code...

var driveCar = doAction('Unlock the car')
  .then(result => {
    console.log(result)
    return doAction('Open the car door')
      .then(result => {
        console.log(result)
        return doAction('Get on board')
          .then(result => {
            console.log(result)
            return doAction('Insert key')
              .then(result => {
                console.log(result)
                return doAction('Turn key')
                  .then(result => {
                    console.log(result)
                    return doAction('Release brake')
                      .then(result => {
                        console.log(result)
                        return doAction('Engaging gear')
                          .then(result => {
                            console.log(result)
                            console.log('Godspeed!')
                          })
                      })
                  })
              })
          })
      })
  })
