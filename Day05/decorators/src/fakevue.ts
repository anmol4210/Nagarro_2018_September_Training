import { Component } from "./decorators";


@Component
class MyComponent {
  x = 10
  hello() {
    console.log('hello')
  }
}

let m = new MyComponent()
console.log(m)
console.log(m.data.x)
m.methods.hello()
