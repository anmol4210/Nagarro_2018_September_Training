import { Special } from './decorators'

@Special
class MyClass {
  oneField: string = "Asdsad"
  someFun() {
    console.log("field: " + this.oneField)
  }
  constructor() {
    console.log("creating object")
  }
}


let m = new MyClass()
m.someFun()
// @ts-ignore
m.hello()

let n = new MyClass()
n.someFun()
