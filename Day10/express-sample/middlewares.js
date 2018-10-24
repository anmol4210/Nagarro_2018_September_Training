const express = require('express')

const server = express()

function m1 (req, res, next) {
  console.log('m1')
  if (req.query.stop == 1) {
    return res.send('stopped at 1')
  }
  next()
}


function m2 (req, res, next) {
  console.log('m2')
  if (req.query.stop == 2) {
    return res.send('stopped at 2')
  }
  next()
}

function m3 (req, res, next) {
  console.log('m3')
  next()
}

server.use('/a', m1)
server.use(m2)
server.use('/a', m3)

server.get('/a/b', (req, res) => {
  res.send('hello world')
})

server.get('/b/b', (req, res) => {
  res.send('awesome! ')
})

server.listen(2323)
