class SomeClass {
  constructor(arg) {
    this.arg = arg
  }
  someFunction() {
    console.log(this)
  }
  anotherFunction() {
    this.someFunction()
  }
}



let someObject = new SomeClass('stuff')

let a = {
  aProperty: 'somevalue',
  aFunction: function () {
    console.log(this)
  }
}

let b = Object.create(a)

function sampleFunction() {
  console.log('this is ==')
  console.log(this)
}

let anObj = {
  key: 'value',
  sampleFunction: function () {
    sampleFunction()
  }
}
