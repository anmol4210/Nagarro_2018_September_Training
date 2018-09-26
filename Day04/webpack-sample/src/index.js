import {
  sayHello
} from './hello.js'


window.onload = function () {
  document.getElementById('btn').onclick = sayHello
}
