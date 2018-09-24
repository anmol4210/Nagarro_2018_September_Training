function downloadFile(url) {
  return new Promise((resolve, reject) => {
    if (!url.startsWith('http')) {
      return reject('URL does not start with http')
    }
    console.log(`${new Date().getSeconds()}: download of ${url} started`)
    //fake download (takes say 2 sec)
    setTimeout(function () {
      resolve(url.split('/').pop())
    }, 2000)
  })

}

function compressFile(fileName) {
  return new Promise((resolve, reject) => {
    let ext = fileName.split('.').pop()
    if (ext !== 'png' && ext !== 'jpg') {
      return reject('We only compress images')
    }
    console.log(`${new Date().getSeconds()}: compresssion of ${fileName} started`)
    //fake compression (takes say 2 sec)
    setTimeout(function () {
      console.log('compresssion done')
      resolve(fileName.split('.')[0] + '.zip')
    }, 2000)
  })

}

function uploadFile(fileName) {
  return new Promise((resolve, reject) => {
    console.log(`${new Date().getSeconds()}: uploading ${fileName} started`)
    //fake compression (takes say 2 sec)
    setTimeout(function () {
      resolve('upload done')
    }, 2000)
  })

}

async function task() {
  try {
    let file = await downloadFile('http://website.com/file.jpg')
    let zip = await compressFile(file)
    await uploadFile(zip)
    console.log('All done')
  } catch (err) {
    alert(err)
  }
}

task()
