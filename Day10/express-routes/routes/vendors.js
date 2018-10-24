const express = require('express')

let vendors = [
  'Samsung',
  'Sony',
  'Apple',
  'Huawei'
]

const route = express.Router()

route.get('/', (req, res) => res.send(vendors))
route.get('/:id', (req, res) => {
  res.send(vendors[req.params.id])
})

module.exports = route
