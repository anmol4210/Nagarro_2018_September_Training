const express = require('express')
const { vendors, products } = require('../data')

const route = express.Router()

route.get('/', (req, res) => res.send(products))
route.get('/:id', (req, res) => {
  const id = parseInt(req.params.id)

  if (isNaN(id)) {
    return res.status(400).send({
      message: 'id should be integer'
    })
  }

  if (id < 0 || id >= products.length) {
    return res.status(404).send({
      message: `Product with ${id} not found`
    })
  }

  res.send(products[id])
})

route.post('/', (req, res) => {

  if (req.body.vendorId >= vendors.length) {
    return res.status(400).send({
      message: 'Invalid vendor ID'
    })
  }
  products.push({
    vendorId: req.body.vendorId,
    name: req.body.name
  })
  res.status(201).send({
    id: products.length - 1,
    success: true
  })

})

module.exports = route
