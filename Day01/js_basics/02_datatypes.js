console.log(typeof 10) //number
console.log(typeof 10.1) //number
console.log(typeof "asdasd") //string
console.log(typeof 'a') //string
console.log(typeof true) //boolean

let obj = {
  a: 10,
  b: 'asd'
}
console.log(typeof obj) // object
console.log(typeof obj.a) // inner properties of object

let arr = [10, 'fggh', true]
console.log(typeof arr) // object, check using Array.isArray()

if (true) {
  let x = 10 // block scope
  console.log(x)
}

console.log(x)
