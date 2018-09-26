export function sayHello() {
  console.log('Hello World!')
}

window.onload = function () {
  document.getElementById('btn').onclick = sayHello
}
