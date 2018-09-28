import { fun1, a, doSomething } from './lib'
import lib from './lib'
import * as libStar from './lib'

fun1()

console.log(a)

console.log(lib.x)

libStar.fun1()

async function task () {
  await doSomething()
}
task()
