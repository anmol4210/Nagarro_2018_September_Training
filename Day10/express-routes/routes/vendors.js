const express = require('express')
const { vendors } = require('../data')

const route = express.Router()

route.get('/',
  (req, res) =>
    res.status(200).json(vendors)
)


route.get('/:id', (req, res) => {
  res
  .status(200)
  .json(vendors[req.params.id])
})

route.post('/', (req, res) => {
  vendors.push({
    name: req.body.name
  })

  res.status(201).json({
    id: vendors.length - 1,
    success: true
  })
})

module.exports = route
