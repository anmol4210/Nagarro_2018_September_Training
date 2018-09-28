namespace interfaces {


  interface Food {
    taste: string
  }

  class Fruit implements Food {
    taste: string = "asd"
    constructor(taste?: string) {
      if (taste) this.taste = taste
    }
  }

  let fruit = new Fruit("asd")

  let fruit2: Fruit = {
    taste: "akjb"
  }

  function eatFruit(f: Fruit) { }

  eatFruit(fruit)
  eatFruit(fruit2)
}
