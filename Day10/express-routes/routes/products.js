const express = require('express')

let products = [
  'iPhone',
  'S9',
  'Note 9',
  'Mate 10 Pro'
]

const route = express.Router()

route.get('/', (req, res) => res.send(products))
route.get('/:id', (req, res) => {
  res.send(products[req.params.id])
})

module.exports = route
