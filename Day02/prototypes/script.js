let a = {
  p: 10,
  q: 20,
  r: 30
}

let b = Object.create(a)

let c = Object.create(b)

let o1 = {
  a: 10
}
let o2 = {
  b: 20
}


let o3 = Object.assign({}, o1)
