const { Router } = require('express')
const { Product, Vendor } = require('../db/index')


const route = Router()

route.get('/', async (req, res) => {

  const products = await Product.findAll()
  res.status(200).json(products)

})

route.post('/', async (req, res) => {
  if (req.body.vendor) {
    const vendor = await Vendor.findOne({
      where: {name: req.body.vendor}
    })

    if (!vendor) {
      return res.status(400).json({
        message: 'Vendor name not found'
      })
    }

    const newProduct = await Product.create({
      name: req.body.name,
      price: req.body.price,
      quantity: req.body.quantity,
      vendorId: vendor.id
    })

    res.status(201).json({
      message: 'Product added',
      id: newProduct.id
    })
  }
})


module.exports = route
