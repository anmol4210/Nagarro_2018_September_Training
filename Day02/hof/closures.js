function createCounter(init, delta) {
  let val = init

  function count() {
    val += delta
    return val
  }

  return count

}


let threeCounter = createCounter(33, 3)
let fiveCounter = createCounter(25, 5)
threeCounter.val = 10

console.log(threeCounter())
console.log(threeCounter())
console.log(threeCounter())

console.log(fiveCounter())
console.log(fiveCounter())
console.log(fiveCounter())
