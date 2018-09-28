namespace union {
  interface Fruit {
    color: string;
    weight: string;
  }

  interface Vegetable {
    taste: string;
    weight: number;
  }

  let carrot: Fruit | Vegetable = {
    color: "red",
    weight: "5kg"
  };

  type impossible = number & string

  type Food = Fruit | Vegetable

  let turnip: Food = {
    taste: 'sour',
    weight: 'k',
    color: 'purple'
  }
}
