export function fun1() {
  console.log('fun1')
  fun2()
}

export const a = 10

function fun2() {
  console.log('fun2')
}

export async function doSomething() {
  return 10
}

export default {
  x: 23
}
