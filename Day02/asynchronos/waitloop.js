let wait = true


setTimeout(function () {
  wait = false
}, 2000)

while (wait) {}


console.log('awesome')
