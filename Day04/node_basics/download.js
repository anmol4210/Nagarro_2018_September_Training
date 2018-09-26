const request = require('request')
const fs = require('fs')

request(
  'https://google.com',
  (err, resp, body) => {
    console.log(resp)
    fs.writeFile('page.html', resp.body, (err) => {
      console.log('File written')
    })
  })
