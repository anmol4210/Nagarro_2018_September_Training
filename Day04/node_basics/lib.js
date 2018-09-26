function hello(name) {
  console.log('Hello ' + name)
}
this.a = 10
console.log('lib')
console.log(this)

module.exports = {
  hello
}
