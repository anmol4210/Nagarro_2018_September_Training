let clicked = 0

let btnWait = document.getElementById('wait')
let btnOther = document.getElementById('other')
let divText = document.getElementById('text')

btnWait.onclick = function () {
  setTimeout(function () {
    divText.innerText = 'the wait is over!'

  }, 5000)
}

btnOther.onclick = function () {
  console.log(clicked++)
}
