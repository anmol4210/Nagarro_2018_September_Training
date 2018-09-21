function downloadFile(url, done) {
  console.log(`${new Date().getSeconds()}: download of ${url} started`)
  //fake download (takes say 2 sec)
  setTimeout(function () {
    done(url.split('/').pop())
  }, 2000)
}

function compressFile(fileName, done) {
  console.log(`${new Date().getSeconds()}: compresssion of ${fileName} started`)
  //fake compression (takes say 2 sec)
  setTimeout(function () {
    console.log('compresssion done')
    done(fileName.split('.')[0] + '.zip')
  }, 2000)
}

function uploadFile(fileName) {
  console.log(`${new Date().getSeconds()}: uploading ${fileName} started`)
  //fake compression (takes say 2 sec)
  setTimeout(function () {
    console.log('upload done')
  }, 2000)
}

downloadFile(
  'http://website.com/file.jpg',
  function (fileName) {
    console.log('after download over')
    compressFile(fileName, function (compressedFile) {
      uploadFile(compressedFile)
    })
  }
)
