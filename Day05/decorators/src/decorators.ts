

export function Special(constructor: Function) {
  console.log(constructor)
  constructor.prototype.hello = function () {
    console.log("added by decorator")
  }
}
