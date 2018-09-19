let newtask = document.getElementById('newtask')
let addtask = document.getElementById('addtask')
let tasklist = document.getElementById('tasklist')

addtask.onclick = function () {
  let task = newtask.value
  tasklist.innerHTML += "<li>" + task + "</li>"
}
