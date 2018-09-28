namespace intersect {
  interface Fruit {
    color: string;
    // weight: string
  }

  interface Vegetable {
    taste: string;
    // weight: number
  }

  let carrot: Fruit & Vegetable = {
    color: "red",
    taste: "sweet"
    // weight: 5
  };
}
