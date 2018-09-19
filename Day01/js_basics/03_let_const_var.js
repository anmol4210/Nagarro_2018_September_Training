// var x; // hoisting of vars
var x = 10
if (true) {
  var x = 20
  console.log(x)
}
console.log(x)


let y = 30
if (true) {
  let y = 40
  console.log(y)
}
console.log(y)


const obj = {
  a: 10
}
obj.a = 12
console.log(obj)

// obj = {
//   a: 12
// }

const k = 10
k = 11
