window.onload = function () {
  let newtask = document.getElementById('newtask')
  let addtask = document.getElementById('addtask')
  let tasklist = document.getElementById('tasklist')

  addtask.onclick = function () {
    let start = new Date().getTime()
    let num = newtask.value
    let newtasklist = document.createElement('ul')
    newtasklist.id = 'tasklist'
    for (let i = 1; i <= num; i++) {
      let item = document.createElement('li')
      item.innerText = i
      newtasklist.appendChild(item)
    }
    document.body.replaceChild(newtasklist, tasklist)
    tasklist = document.getElementById('tasklist')
    // for (let i = 1; i <= num; i++) {
    //   tasklist.innerHTML += `<li>${i}</li>`
    // }

    console.log(new Date().getTime() - start)
  }

}
