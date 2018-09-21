function greetingGenerator(salutation, getTime) {

  function greet(personName, inUtc) {
    console.log(
      salutation + ' ' + personName + ', it is ' + getTime(inUtc)
    )
  }
  return greet
}


function checkTime(inUtc) {
  if (inUtc) {
    return new Date().toUTCString()
  }
  return new Date().toLocaleTimeString()
}

let gm = greetingGenerator('Good Morning', checkTime)
let ge = greetingGenerator('Good Evening', checkTime)

gm('Sally')
ge('Jenna', true)
