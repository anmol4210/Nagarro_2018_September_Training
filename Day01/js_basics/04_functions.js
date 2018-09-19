// functions

function area(a, b = a) {
  return a * b
}

function sum(n1, n2) {
  if (typeof n2 == 'undefined') {
    n2 = 0
  }
  return n1 + n2
}

function mult(...ops) { //varargs
  let result = 1
  for (let i = 0; i < ops.length; i++) {
    result *= ops[i]
  }
  return result
}

function mult2(n1, n2, n3) {
  return (n1 * n2 * n3)
}


console.log('rect area = ' + area(5, 6))
console.log('square area = ' + area(5))

console.log(sum(3, 4))
console.log(sum(3))
console.log(sum(3, 4, 5))
console.log(mult(1, 2, 3, 4))

let ops = [3, 4, 5]
console.log(mult2(...ops))
