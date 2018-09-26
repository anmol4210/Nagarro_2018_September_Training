function add(a: string, b: string) {
  return a + b;
}

function concat(a: any, b: any): number {
  return a + b;
}

add(concat(1, 2).toString(), "" + concat(3, 4));
